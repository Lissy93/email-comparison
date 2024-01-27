
import type { MailProvider, MailProviderAttributes, TextAndLevel, TransformedMailProvider } from '../types/MailServices';
import { ATTRIBUTE_KEYS_TITLES } from '../types/MailServices';

export const makeKey = (str: string) => str.toLowerCase().replace(/\s+/g, '-');

/**
 * Transforms the initial data structure, into something a bit more manageable.
 * @param mailProviders 
 * @returns 
 */
export function transformMailProviders(mailProviders: MailProvider[]): TransformedMailProvider[] {
  return mailProviders.map(provider => ({
    name: provider.name,
    icon: provider.icon,
    key: makeKey(provider.name),
    attributes: Object.keys(ATTRIBUTE_KEYS_TITLES).map((key) => {
      const attributeKey = key as keyof MailProviderAttributes;
      const attribute = provider[attributeKey] as TextAndLevel;
      return {
        key: attributeKey,
        title: ATTRIBUTE_KEYS_TITLES[attributeKey],
        level: attribute.level,
        value: attribute.text,
      };
    }),
  }));
}
