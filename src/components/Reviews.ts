import { LitElement, html, css } from 'lit';
import { marked } from 'marked';
import { customElement, property, state } from 'lit/decorators.js';


type GhCommentReactionContent = 'THUMBS_UP' | 'THUMBS_DOWN' | 'LAUGH' | 'HOORAY' | 'CONFUSED' | 'HEART' | 'ROCKET' | 'EYES';

interface GhCommentReaction {
  content: GhCommentReactionContent;
  count: number;
}

interface GhCommentAuthor {
  login: string;
  avatarUrl: string;
  name?: string;
  bio?: string;
  createdAt: string;
}

interface GhComment {
  author: GhCommentAuthor;
  body: string;
  createdAt: string;
  lastEditedAt: string | null;
  upvoteCount: number;
  reactions: GhCommentReaction[];
}



// @customElement('github-discussion-reviews')
export class Reviews extends LitElement {
  @property({ attribute: false, type: Number }) discussionId: number | undefined;
  @state() private comments: Comment[] = [];
  @state() private isLoading: boolean = false;

  static styles = css`
    .comment-wrapper {
      margin-bottom: 2rem;
      a {
        color: var(--primary);
      }
      .view-all-link {
        font-size: 0.8rem;
        @media (min-width: 800px) {
          float: right;
          margin-top: -3rem;
        }
      }
    }

    
    .comment {
      border: 1px solid var(--foreground-lighter);
      padding: 0.5rem;
      margin: 0.5rem auto;
      &:hover {
        .comment-meta {
          opacity: 1;
        }
        .author-avatar {
          transform: scale(1.1);
        }
      }
    }
    .author-info {
      display: flex;
      .author-name-stats {
        a { display: inline; }
        p {
          margin: 0;
        }
        .metrics, .website {
          font-size: 0.8rem;
          opacity: 0.75;
        }
        
      }
    }
    .author-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
      transition: all 0.2s ease-in-out;
    }
    .comment-meta {
      cursor: default;
      opacity: 0.8;
      transition: all 0.2s ease-in-out;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      .edited {
        color: var(--primary);
      }
      .date {
        font-size: 0.8rem;
        opacity: 0.75;
        margin: 0;
      }
      .upvotes {
        border: 1px solid var(--primary);
        height: 1.5rem;
        display: inline-block;
        width: 2.8rem;
        border-radius: 4px;
        padding: 0;
        margin: 0;
        font-size: 0.9rem;
        background: #ffea3024;
        text-align: center;
      }
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    if (this.discussionId) {
      this.fetchComments();
    }
  }

  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    if (changedProperties.has('discussionId') && this.discussionId !== undefined) {
      this.fetchComments();
    }
  }

  async fetchComments(): Promise<void> {
    this.isLoading = true;
    const apiUrl = `https://github-discussion-comments.as93.workers.dev/?username=lissy93&repo=email-comparison&discussionId=${this.discussionId}`;
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      this.comments = await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      // Handle error gracefully in the UI
    } finally {
      this.isLoading = false;
    }
  }

  formatFollowerCount(followerCount: number): string {
    return followerCount < 1000 ? followerCount.toString() : `${(followerCount / 1000).toFixed(1)}k`;
  }

  timeSinceJoined(joinedDateStr: string): string {
    const joinedDate = new Date(joinedDateStr);
    const now = new Date();
    const diffYears = now.getFullYear() - joinedDate.getFullYear();
    const diffMonths = now.getMonth() - joinedDate.getMonth();
    const diffDays = now.getDate() - joinedDate.getDate();
  
    if (diffYears > 0) return `${diffYears} ${diffYears === 1 ? 'year' : 'years'}`;
    if (diffMonths > 0) return `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'}`;
    if (diffDays > 0) return `${diffDays} ${diffDays === 1 ? 'day' : 'days'}`;
    return 'Joined today';
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  mapReactionToEmoji(reaction: GhCommentReactionContent): string {
    switch (reaction) {
      case 'THUMBS_UP':
        return '👍';
      case 'THUMBS_DOWN':
        return '👎';
      case 'LAUGH':
        return '😂';
      case 'HOORAY':
        return '🎉';
      case 'CONFUSED':
        return '😕';
      case 'HEART':
        return '❤️';
      case 'ROCKET':
        return '🚀';
      case 'EYES':
        return '👀';
      default:
        return '';
    }
  };

  sanitizeHtml(html: string): string {
    return html.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
               .replace(/<style[^>]*>([\S\s]*?)<\/style>/gmi, '');
  }

  makeAuthorInfo(author: GhCommentAuthor) {
    const authorLink = html`<a class="author-info" href="https://github.com/${author.login}" target="_blank" rel="nofollow">@${author.login}</a>`;
    // const authorWebsite = author.websiteUrl ? html`<a class="website" href="${author.websiteUrl}" target="_blank" rel="nofollow">${author.websiteUrl}</a>` : null;
    return html`
      <div class="author-info">
        <img class="author-avatar" src="${author.avatarUrl}" alt="${author.login}">  
        <div class="author-name-stats">
          <p title="${author.bio}">${author.name ? html`${author.name} (${authorLink})` : html`${authorLink}`}</p>
          <p class="metrics">Joined ${this.timeSinceJoined(author.createdAt)} ago • ${this.formatFollowerCount(author.followers.totalCount)} followers</p>
        </div>
      </div>
    `;
  }

  makeCommentInfo(comment: GhComment) {
    const date = this.formatDate(comment.createdAt);
    const edited = comment.lastEditedAt ? html`<span class="edited" title="User edited this review on ${this.formatDate(comment.lastEditedAt)}">Edited</span>` : null;

    
    return html`
      <div class="comment-meta">
        <div class="ratings">
          <span class="upvotes" title="This review has had ${comment.upvoteCount} votes via GitHub. Login to vote.">⮝ ${comment.upvoteCount}</span>
          <span class="reactions">
            ${
              comment.reactionGroups
              .filter(reaction => reaction.users.totalCount > 0)
              .map(reaction => html`
                <span class="reaction" title="${reaction.users.totalCount} gave this post the ${reaction.content} emoji">
                ${this.mapReactionToEmoji(reaction.content)}
                </span>
              `)}
          </span>
        </div>
        <p class="date">Posted on ${date} ${edited}</p>
      </div>
    `;
  }

  renderComment(comment: GhComment) {
    const sanitizedHtml = this.sanitizeHtml(marked(comment.body));
    return html`
      <div class="comment">
        ${this.makeAuthorInfo(comment.author)}
        <p .innerHTML=${sanitizedHtml}></p>
        ${this.makeCommentInfo(comment)}
      </div>
    `;
  }

  render() {
    return html`
      <div class="comment-wrapper">
        <p class="view-all-link">
          View full thread on
          <a target="__blank" href="https://github.com/lissy93/email-comparison/discussions/${this.discussionId}">
          #${this.discussionId}
          </a>
        </p>
        ${this.isLoading ? html`<p>Loading user reviews from GitHub...</p>` : null}
        ${this.comments.length == 0 && !this.isLoading ? html`<p>Nothing yet. Why don't you be the first to leave a comment?</p>` : null}
        ${this.comments.map(comment => this.renderComment(comment))}
      
      </div>
    `;
  }
}

customElements.define('github-discussion-reviews', Reviews);
