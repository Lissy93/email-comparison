export interface Tip {
  title: string;
  description: string;
}

export interface Section {
  id: string;
    title: string;
    longTitle?: string;
  tips: Tip[];
}

export const introduction = [
  'Your email account is the gateway to your entire digital life. '
  + 'Password resets, banking alerts, two-factor codes — they all flow through your inbox. '
  + 'If someone gains access to it, they can work their way into almost everything else.',

  'The good news is that a handful of practical steps can dramatically reduce your risk. '
  + 'None of this requires deep technical knowledge — just a bit of awareness and the willingness to make a few changes.',
];

export const sections: Section[] = [
  {
    id: 'essentials',
    title: 'Essentials',
    longTitle: 'Essential Security Practices',
    tips: [
      {
        title: 'Use a Custom Domain',
        description:
          'Owning your own domain (e.g. you@yourdomain.com) means you\'re never locked into a single provider. '
          + 'If your current service shuts down or you want to switch, you just update your DNS records — no need to change your address everywhere.',
      },
      {
        title: 'Use Aliases and Anonymous Forwarding',
        description:
            'Give each service a unique email address (e.g. service123@yourdomain.com). '
          + 'Then, when you start receiving spam, you\'ll know exactly which service leaked your email, and you can disable that alias with one-click. '
          + 'Services like [AnonAddy](https://anonaddy.com) and [SimpleLogin](https://simplelogin.io) make this easy.',
      },
      {
        title: 'Secure Your Account with a Strong Password and 2FA',
        description:
          'Use a long, strong, unique password. Enable 2FA (such as a YubiKey or authenticator app) separate from your password manager.'
      },
      {
        title: 'Keep Regular Backups',
        description:
          'Use an email client like [Thunderbird](https://www.thunderbird.net) to sync your mailbox over IMAP so you always have a local copy. '
          + 'This protects you against account lockouts, provider outages, or unexpected service shutdowns.',
      },
    ],
  },
  {
    id: 'info-leakage',
    title: 'Watch Out for Info Leakage',
    tips: [
      {
        title: 'Don\'t Click Unsubscribe in Unsolicited Mail',
        description:
            'If you receive spam or an email you never signed up for, don\'t hit "unsubscribe." '
            + 'Doing so only confirms that your email address is active and in use. Mark it as spam instead.'
      },
      {
        title: 'Be Careful with Auto-Replies',
        description:
          'Out-of-office replies are handy, but they can reveal more than you intend: '
          + 'your info, travel dates, other contacts, and the fact that you\'re not monitoring your inbox. '
          + 'Ensure auto replies are only sent to known contacts, and avoid including personal info.',
      },
      {
        title: 'Watch Your Email Signature',
        description:
            'You don\'t know how secure your recipient\'s environment is. '
          + 'For example, there are browser extensions (like ZoomInfo), which can automatically scrape email signatures and build contact databases'
      },
    ],
  },
  {
    id: 'incoming-mail',
    title: 'Be Vigilant of Incoming Mail',
    tips: [
      {
        title: 'Don\'t Click Links Without Checking',
        description:
          'Phishing emails are getting more convincing. Before clicking any link, hover over it to see where it actually leads. '
          + 'If the domain doesn\'t match the expected sender, don\'t click it. When in doubt, go directly to the website by typing the address into your browser.',
      },
      {
        title: 'Verify the Sender\'s Domain',
        description:
          'Check that the "From" address actually matches who the email claims to be from. '
          + 'Spoofed emails often come from domains that look similar but aren\'t quite right (e.g. paypa1.com instead of paypal.com). '
          + 'If your provider supports it, check the SPF/DKIM/DMARC headers for additional verification.',
      },
      {
        title: 'Be Cautious with Attachments',
        description:
          'Malicious files can be easily disguised, especially when sent in a compressed/ZIP file.',
        },
      {
        title: 'Don\'t connect third-party apps to your inbox',
        description:
          'Services like Unroll.me or SaneBox get full access to all your email content, and commonly upload this to their servers for processing.'
      },
    ],
  },
  {
    id: 'encryption',
      title: 'Encryption',
    longTitle: 'Encrypting Important Data',
    tips: [
      {
        title: 'Use Encryption for Sensitive Data',
        description:
            'Without encryption, email is plaintext.  Your provider, the recipient\'s provider, and anyone in between can read the content. '
          + 'Encryption ensures only you and the intended recipient can see the message',
      },
      {
        title: 'Choose an Encrypted Provider',
        description:
              'Where possible use email services which support end-to-end encryption, or encrypt your messages via PGP. '
              + 'Remember, your messages are only encrypted end-to-end when both the sender and the recipient have encryption set up. '
        + 'TLS alone is not enough'
      },
    ],
  },
  {
    id: 'audit',
    title: 'Audit Your Account Regularly',
    tips: [
      {
        title: 'Check Your Forwarding Rules',
        description:
            'A common tactic for attackers is to set up a forwarding rule, to silently send all your incoming mail to an address they control. '
            + 'Periodically check your email settings, forwarding rules, filters and auto-replies for any changes you didn\'t make. '
      },
      {
        title: 'Review Connected Sessions',
        description:
            'Most email providers let you see a list of active sessions and recent login activity. '
            + 'If you see any logins you don\'t recognize, revoke it immediately and change your password. '
      },
      {
        title: 'Verify Recovery Settings',
        description:
              'Make sure that your account recovery email/phone are still yours and up-to-date. '
              + 'An attacker who controls the recovery method can reset your password and gain access to your account. '
          + 'Likewise, without any recovery options configured, you will not be able to regain entry into your email if you forget/lose any of your credentials',
      },
    ],
  },
  {
    id: 'settings',
    title: 'Configure Your Email Settings',
    tips: [
      {
        title: 'Disable Remote Content Loading',
        description:
          'HTML emails can load images and stylesheets from external servers. This tells the sender your IP address, device info, and the exact time you opened the message — '
          + 'a common tracking technique. Most email clients have an option to block remote content by default. '
          + 'See [this article](https://www.theverge.com/2019/7/3/20680903/email-pixel-trackers-how-to-stop-images-automatic-download) for more detail.',
      },
      {
        title: 'Disable Read Receipts',
        description:
          'Read receipts confirm to the sender that you opened their message and when. '
          + 'Turn them off or set to "ask before sending" in your email client settings.',
      },
      {
        title: 'Turn Off Auto-Download of Attachments',
        description:
          'Some clients auto-download or preview attachments. '
          + 'Disable this so nothing runs without your explicit approval.',
      },
      {
        title: 'Hide Email Previews on Your Lock Screen',
        description:
          'Notifications can show sender, subject, and a snippet to anyone nearby. '
          + 'Set notifications to hide content when your device is locked.',
        },
        {
          title: 'Use Plaintext',
          description:
            'Most privacy and security threats with email (like tracking pixels, disguised links, and parser exploits) '
            + 'come from loading of dynamic HTML content. '
            + 'For optimal protection, you can set your client to compose and display plaintext.'
          + 'Although plaintext is no longer widely supported, and so can make mail harder to read.',
        },
    ],
  },
  {
    id: 'choosing-provider',
    title: 'Choose a Good Email Provider',
    tips: [
      {
        title: 'Avoid Gmail, Outlook, Yahoo, and GMX',
        description:
          'Major free email providers make money from your data. '
          + 'Gmail has been caught giving [third parties access to user emails](https://www.wsj.com/articles/techs-dirty-secret-the-app-developers-sifting-through-your-gmail-1530544442) '
          + 'and [tracking purchases](https://www.cnbc.com/2019/05/17/google-gmail-tracks-purchase-history-how-to-delete-it.html). '
          + 'Yahoo scanned emails in real time [for government agencies](http://news.trust.org/item/20161004170601-99f8c). '
          + 'If email privacy matters to you, these are not good choices.',
      },
      {
        title: 'Think Twice Before Self-Hosting',
        description:
          'Running your own mail server gives you total control, but correctly configuring and securing one is genuinely difficult. '
          + 'Misconfiguration can lead to your server being used for spam or your messages being rejected by other providers. '
          + 'For most people, a trustworthy hosted provider is a better trade-off. '
          + 'If you do want to try, [Mail-in-a-Box](https://github.com/mail-in-a-box/mailinabox) and '
          + '[docker-mailserver](https://github.com/docker-mailserver/docker-mailserver) are solid starting points.',
        },
        {
          title: 'Understand that you might need to pay',
          description:
                'Typically, if a service is free - then you are the product. A paid email service has a business model that doesn\'t depend on mining your data. '
            + 'Likewise, owning a domain will cost a few dollars a year, but is worth it to retain control of your address',
        },
    ],
  },
  {
    id: 'provider-checklist',
    title: 'What to Look for in a Provider',
    tips: [
      {
        title: 'Jurisdiction',
        description:
          'Where your provider is incorporated matters. Countries in the [Five Eyes](https://en.wikipedia.org/wiki/Five_Eyes) alliance '
          + '(US, UK, Canada, Australia, New Zealand) have broad surveillance powers and intelligence-sharing agreements. '
          + 'Providers based in privacy-friendly jurisdictions like Switzerland, Iceland, or Germany offer stronger legal protections for your data.',
      },
      {
        title: 'Encryption Support',
        description:
          'Look for a provider that supports end-to-end encryption — ideally built into the service so it works automatically. '
      },
      {
        title: 'Open Source',
        description:
          'Providers whose code is open source allow independent security researchers to audit it. '
          + 'This transparency makes it much harder to hide backdoors or poor security practices. '
      },
      {
        title: 'Custom Domain Support',
        description:
          'A good provider should let you use your own domain. This ensures portability — '
          + 'you can switch providers without changing your email address.',
      },
      {
        title: 'IMAP Support',
        description:
          'IMAP access lets you use third-party clients and keep local backups of your mailbox. '
          + 'Providers that only offer a web interface lock you into their platform.',
      },
      {
        title: 'Independent Security Audit',
        description:
          'Has the provider been audited by an independent third party? '
          + 'A published audit report demonstrates that the provider is willing to have its security claims verified.',
      },
      {
        title: 'Actively Maintained',
        description:
          'Check when the provider last released an update or responded to a security issue. '
          + 'A service that hasn\'t been updated in years may have unpatched vulnerabilities. '
          + 'An actively maintained product is more likely to respond quickly to new threats.',
        },
        {
          title: 'Anonymous Sign-Up and Payment',
          description:
            'If anonymity is important to you, look for providers that don\'t require personal information to create an account '
            + 'and accept anonymous payment methods like cryptocurrency or cash.',
        },
        {
          title: 'Onion Site / Tor Access',
          description:
              'For ultimate anonymity, some providers offer an .onion address. '
                + 'This allows high-value users to access their mail over the Tor network, '
              + 'which provides an extra layer of anonymity by hiding your IP address fully '
        },
    ],
  },
];
