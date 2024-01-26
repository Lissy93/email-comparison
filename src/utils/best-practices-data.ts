export const bestPracticesData = [
  {
    title: 'Have more than one email address',
    description: 'Consider using a different email address for security-critical '
      + 'communications from trivial mail such as newsletters. This compartmentalization '
      + 'could reduce amount of damage caused by a data breach, and also make it easier '
      + 'to recover a compromised account',
  },
  {
    title: 'Keep Email Address Private',
    description: 'Do not share your primary email publicly, as mail addresses are '
      + 'often the starting point for most phishing attacks',
  },
  {
    title: 'Keep your Account Secure',
    description: 'Use a long and unique password, enable 2FA and be careful while '
      + 'logging in. Your email account provides an easy entry point to all your '
      + 'other online accounts for an attacker',
  },
  {
    title: 'Disable Automatic Loading of Remote Content',
    description: 'Email messages can contain remote content such as images or stylesheets, '
      + 'often automatically loaded from the server. You should disable this, as it exposes '
      + 'your IP address and device information, and is often used for tracking. For more info, '
      + 'see [this article](https:\\/\\/www.theverge.com\\/2019\\/7\\/3\\/20680903\\/email-pixel-trackers-how-to-stop-images-automatic-download)',
  },
  {
    title: 'Use Plaintext',
    description: 'There are two main types of emails on the internet: plaintext and HTML. The '
      + 'former is strongly preferred for privacy & security as HTML messages often include '
      + 'identifiers in links and inline images, which can collect usage and personal data. '
      + 'There\'s also numerous risks of remote code execution targeting the HTML parser of your '
      + 'mail client, which can not be exploited if you are using plaintext. For more info, as '
      + 'well as setup instructions for your mail provider, see [UsePlaintext.email](https:\\/\\/useplaintext.email\\/)',
  },
  {
    title: 'Don’t connect third-party apps to your email account',
    description: 'If you give a third-party app or plug-in (such as Unroll.me, Boomerang, '
      + 'SaneBox etc) full access to your inbox, they effectively have full unhindered access '
      + 'to all your emails and their contents, which poses [significant security and privacy risks]'
      + '(https:\\/\\/zeltser.com\\/risks-of-email-search-services\\/)',
  },
  {
    title: 'Don\'t Share Sensitive Data via Email',
    description: 'Emails are very easily intercepted. Further to this you can’t be sure of '
      + 'how secure your recipient\'s environment is. Therefore emails cannot be considered '
      + 'safe for exchanging confidential information, unless it is encrypted.',
  },
  {
    title: 'Consider Switching to a Secure Mail Provider',
    description: 'Secure and reputable email providers such as [Forward Email](https:\\/\\/forwardemail.net), '
      + '[ProtonMail](https:\\/\\/protonmail.com) and [Tutanota](https:\\/\\/tutanota.com) allow for '
      + 'end-to-end encryption, full privacy as well as more security-focused features. Unlike typical '
      + 'email providers, your mailbox cannot be read by anyone but you, since all messages are encrypted. '
      + 'Providers such as Google, Microsoft and Yahoo scan messages for advertising, analytics and law '
      + 'enforcement purposes, but this poses a serious security threat',
  },
  {
    title: 'Use Smart Key',
    description: 'OpenPGP also [does not support](https:\\/\\/www.eff.org\\/deeplinks\\/2013\\/08\\/pushing-perfect-forward-secrecy-important-web-privacy-protection) '
      + 'Forward secrecy, which means if either your or the recipient\'s private key is ever stolen, all '
      + 'previous messages encrypted with it will be exposed. Therefore, you should take great care to keep '
      + 'your private keys safe. One method of doing so, is to use a USB Smart Key to sign or decrypt messages, '
      + 'allowing you to do so without your private key leaving the USB device. Devices which support this include '
      + '[NitroKey](https:\\/\\/www.nitrokey.com\\/), [YubiKey 5](https:\\/\\/www.yubico.com\\/products\\/yubikey-5-overview\\/)'
      + ' (See [Yubico Neo](https:\\/\\/developers.yubico.com\\/ykneo-openpgp\\/)), [Smart Card](https:\\/\\/www.floss-shop.de\\/en\\/security-privacy\\/smartcards\\/13\\/openpgp-smart-card-v3.3) '
      + '(See [guide](https:\\/\\/spin.atomicobject.com\\/2014\\/02\\/09\\/gnupg-openpgp-smartcard\\/)), [OnlyKey](https:\\/\\/onlykey.io\\/)',
  },
  {
    title: 'Use Aliasing / Anonymous Forwarding',
    description: 'Email aliasing allows messages to be sent to [anything]@my-domain.com and still land in '
      + 'your primary inbox. Effectively allowing you to use a different, unique email address for each service '
      + 'you sign up for. This means if you start receiving spam, you can block that alias and determine which '
      + 'company leaked your email address. More importantly, you do not need to reveal your real email address '
      + 'to any company. <br>[Anonaddy](https:\\/\\/anonaddy.com) and [SimpleLogin](https:\\/\\/simplelogin.io\\/?slref=bridsqrgvrnavso) are open source anonymous email forwarding '
      + 'service allowing you to create unlimited email aliases, with a free plan',
  },
  {
    title: 'Subaddressing',
    description: 'An alternative to aliasing is [subaddressing](https:\\/\\/en.wikipedia.org\\/wiki\\/Email_address#Subaddressing), '
      + 'where anything after the `+` symbol is omitted during mail delivery, for example you the address '
      + 'yourname+tag@example.com denotes the same delivery address as yourname@example.com. This was defined in '
      + '[RCF-5233](https:\\/\\/tools.ietf.org\\/html\\/rfc5233), and supported by most major mail providers (inc Gmail, '
      + 'YahooMail, Outlook, FastMail, Forward Email and ProtonMail). It enables you to keep track of who shared\\/ leaked '
      + 'your email address, but unlike aliasing it will not protect against your real address being revealed',
  },
  {
    title: 'Use a Custom Domain',
    description: 'Using a custom domain, means that even you are not dependent on the address assigned by your mail '
      + 'provider. So you can easily switch providers in the future and do not need to worry about a service being discontinued',
  },
  {
    title: 'Sync with a client for backup',
    description: 'Further to the above, to avoid loosing temporary or permanent access to your emails during an unplanned '
      + 'event (such as an outage or account lock). Thunderbird can sync\\/ backup messages from multiple accounts via IMAP '
      + 'and store locally on your primary device',
  },
  {
    title: 'Be Careful with Mail Signatures',
    description: 'You do not know how secure of an email environment the recipient of your message may have. There are several '
      + 'extensions (such as [ZoomInfo](https:\\/\\/www.zoominfo.com)) that automatically crawl messages, and create a detailed '
      + 'database of contact information based upon email signitures, and sometimes message content. If you send an email to '
      + 'someone who has something like this enabled, then you are unknowingly entering your details into this database',
  },
  {
    title: 'Be Careful with Auto-Replies',
    description: 'Out-of-office automatic replies are very useful for informing people there will be a delay in replying, '
      + 'but all too often people reveal too much information- which can be used in social engineering and targeted attacks',
  },
  {
    title: 'Choose the Right Mail Protocol',
    description: 'Do not use outdated protocols (below IMAPv4 or POPv3), both have known vulnerabilities and out-dated security.',
  },
  {
    title: 'Self-Hosting',
    description: 'Self-hosting your own mail server is not recommended for non-advanced users, since correctly securing it is critical '
      + 'yet requires strong networking knowledge - [read more](https:\\/\\/www.reddit.com\\/r\\/selfhosted\\/comments\\/6h88qf\\/on_selfhosted_mail_servers\\/). '
      + 'That being said, if you run your own mail server, you will have full control over your emails. [Mail-in-a-box](https:\\/\\/github.com\\/mail-in-a-box\\/mailinabox) '
      + 'and [docker-mailserver](https:\\/\\/github.com\\/tomav\\/docker-mailserver) are ready-to-deploy correctly-configured mail servers that provide a good starting point',
  },
  {
    title: 'Always use TLS Ports',
    description: 'There are SSL options for POP3, IMAP, and SMTP as standard TCP\\/IP ports. They are easy to use, and widely supported so '
      + 'should always be used instead of plaintext email ports. By default, the ports are: POP3= 995, IMAP=993 and SMTP= 465',
  },
  {
    title: 'DNS Availability',
    description: 'For self-hosted mail servers, to prevent DNS problems impacting availability- use at least 2 MX records, with secondary '
      + 'and tertiary MX records for redundancy when the primary MX record fails',
  },
  {
    title: 'Prevent DDoS and Brute Force Attacks',
    description: 'For self-hosted mail servers (specifically SMTP), limit your total number of simultaneous connections, and maximum '
      + 'connection rate to reduce the impact of attempted bot attacks',
  },
  {
    title: 'Maintain IP Blacklist',
    description: 'For self-hosted mail servers, you can improve spam filters and harden security, through maintaining an up-to-date local '
      + 'IP blacklist and a spam URI realtime block lists to filter out malicious hyperlinks. You may also want to activate a [reverse DNS '
      + 'lookup](https:\\/\\/en.wikipedia.org\\/wiki\\/Reverse_DNS_lookup) system',
  }
]

export const introduction = [
  'Nearly 50 years since the first email was sent, it\'s still very much a big part of our day-to-day life, '
  + 'and will continue to be for the near future. So considering how much trust we put in them, it\'s '
  + 'surprising how fundamentally insecure this infrastructure is. '
  + '<br>Email-related fraud [is on the up](https://www.csoonline.com/article/3247670/email/email-security-in-2018.html), '
  + 'and without taking basic measures you could be at risk.',
  
  'If a hacker gets access to your emails, it provides a gateway for your other accounts '
  + 'to be compromised (through password resets), therefore email security is paramount '
  + 'for your digital safety.',
  
  'The big companies providing "free" email service, don\'t have a good reputation for '
  + 'respecting users privacy: Gmail was caught giving '
  + '[third parties full access](https://www.wsj.com/articles/techs-dirty-secret-the-app-developers-sifting-through-your-gmail-1530544442) '
  + 'to user emails and also [tracking all of your purchases](https://www.cnbc.com/2019/05/17/google-gmail-tracks-purchase-history-how-to-delete-it.html). '
  + 'Yahoo was also caught scanning emails in real-time [for US surveillance agencies](http://news.trust.org/item/20161004170601-99f8c) '
  + 'Advertisers [were granted access](https://thenextweb.com/insider/2018/08/29/both-yahoo-and-aol-are-scanning-customer-emails-to-attract-advertisers) '
  + 'to Yahoo and AOL users messages to “identify and segment potential customers by picking up on contextual buying signals, and past purchases.”'
];

