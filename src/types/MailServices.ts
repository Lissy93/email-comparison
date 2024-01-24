export interface MailServices {
  mailProviders: MailProvider[];
};

export interface MailProvider {
  name: string;
  link: string;
  icon: string;
  description: string;
  discussionId: number;
  jurisdiction: TextAndLevel;
  encryption: TextAndLevel;
  openSource: TextAndLevel;
  onionSite: TextAndLevel;
  pricing: TextAndLevel;
  customDomain: TextAndLevel;
  aliases: TextAndLevel;
  webClientAccess: TextAndLevel;
  securityAudit: TextAndLevel;
  acceptsCrypto: TextAndLevel;
  personalInfoRequired: TextAndLevel;
  mobileApp: TextAndLevel;
  activeDevelopment: TextAndLevel;
}

export interface TextAndLevel {
  text: string;
  level: number;
}

export interface TransformedMailProvider {
  name: string;
  key: string;
  icon: string;
  attributes: TransformedAttribute[];
}

export interface TransformedAttribute {
  key: keyof MailProviderAttributes;
  title: string;
  level: number;
  value: string;
}

export const ATTRIBUTE_KEYS_TITLES = {
  jurisdiction: 'Jurisdiction',
  encryption: 'Encryption',
  openSource: 'Open Source',
  onionSite: 'Onion Site',
  pricing: 'Pricing',
  customDomain: 'Custom Domain',
  aliases: 'Aliases',
  webClientAccess: 'Web Client Access',
  securityAudit: 'Security Audit',
  acceptsCrypto: 'Accepts Crypto',
  personalInfoRequired: 'Personal Info Required',
  mobileApp: 'Mobile App',
  activeDevelopment: 'Active Development'
} as const;

export type MailProviderAttributes = typeof ATTRIBUTE_KEYS_TITLES;
