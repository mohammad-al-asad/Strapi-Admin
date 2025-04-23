import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCardContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_contents';
  info: {
    displayName: 'card_content';
    icon: 'archive';
  };
  attributes: {
    card: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    card_buttons: Schema.Attribute.JSON;
    card_texts: Schema.Attribute.Blocks;
  };
}

export interface SharedCheckbox extends Struct.ComponentSchema {
  collectionName: 'components_shared_checkboxes';
  info: {
    displayName: 'checkbox';
    icon: 'check';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface SharedContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_contents';
  info: {
    displayName: 'content';
    icon: 'alien';
  };
  attributes: {
    content_icon: Schema.Attribute.String;
    content_text: Schema.Attribute.String;
  };
}

export interface SharedContentPair extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_pairs';
  info: {
    description: '';
    displayName: 'content_pair';
    icon: 'expand';
  };
  attributes: {
    content: Schema.Attribute.JSON;
    content_buttons: Schema.Attribute.JSON;
    content_headings: Schema.Attribute.Blocks;
    content_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    orientation: Schema.Attribute.Enumeration<['right', 'left']>;
  };
}

export interface SharedFeaturesList extends Struct.ComponentSchema {
  collectionName: 'components_shared_features_lists';
  info: {
    displayName: 'features_list';
    icon: 'shoppingCart';
  };
  attributes: {
    blog: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'alien';
  };
  attributes: {
    checkbox: Schema.Attribute.Component<'shared.checkbox', true>;
    hero_buttons: Schema.Attribute.JSON;
    hero_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    hero_texts: Schema.Attribute.Blocks;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMobileShowcaseBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_mobile_showcase_banners';
  info: {
    description: '';
    displayName: 'mobile_showcase_banner';
    icon: 'landscape';
  };
  attributes: {
    position: Schema.Attribute.Enumeration<['right', 'left']>;
    showcase_banner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    showcase_buttons: Schema.Attribute.JSON;
    showcase_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    showcase_texts: Schema.Attribute.Blocks;
  };
}

export interface SharedNav extends Struct.ComponentSchema {
  collectionName: 'components_shared_navs';
  info: {
    displayName: 'nav';
    icon: 'apps';
  };
  attributes: {
    button: Schema.Attribute.JSON;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    navItems: Schema.Attribute.JSON;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedReviewSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_review_sections';
  info: {
    displayName: 'review_section';
    icon: 'chartCircle';
  };
  attributes: {
    author_name: Schema.Attribute.String;
    blog: Schema.Attribute.Text;
    profile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTool extends Struct.ComponentSchema {
  collectionName: 'components_shared_tools';
  info: {
    displayName: 'tool';
    icon: 'cast';
  };
  attributes: {
    tool_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    tool_information: Schema.Attribute.JSON;
  };
}

export interface SharedToolsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_tools_sections';
  info: {
    description: '';
    displayName: 'tools_section';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    tool: Schema.Attribute.Component<'shared.tool', true>;
  };
}

export interface SharedUsertype1 extends Struct.ComponentSchema {
  collectionName: 'components_shared_usertype1s';
  info: {
    description: '';
    displayName: 'usertype1';
    icon: 'fileError';
  };
  attributes: {
    banner_usertype1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    content_pair_primary_usertype1: Schema.Attribute.Component<
      'shared.content-pair',
      false
    >;
    content_pair_secondary_usertype1: Schema.Attribute.Component<
      'shared.content-pair',
      false
    >;
    features_list: Schema.Attribute.Component<'shared.features-list', true>;
    hero_supporting_text: Schema.Attribute.Blocks;
    hero_usertype1: Schema.Attribute.Component<'shared.hero', false>;
    mobile_showcase_banner: Schema.Attribute.Component<
      'shared.mobile-showcase-banner',
      false
    >;
  };
}

export interface SharedUsertype2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_usertype2s';
  info: {
    description: '';
    displayName: 'usertype2';
    icon: 'dashboard';
  };
  attributes: {
    banner_usertype2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    card_content: Schema.Attribute.Component<'shared.card-content', false>;
    content_pair_primary_usertype2: Schema.Attribute.Component<
      'shared.content-pair',
      false
    >;
    content_pair_secondary_usertype2: Schema.Attribute.Component<
      'shared.content-pair',
      false
    >;
    hero_usertype2: Schema.Attribute.Component<'shared.hero', false>;
    mobile_showcase_banner_usertype2: Schema.Attribute.Component<
      'shared.mobile-showcase-banner',
      false
    >;
    review_section_usertype2: Schema.Attribute.Component<
      'shared.review-section',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.card-content': SharedCardContent;
      'shared.checkbox': SharedCheckbox;
      'shared.content': SharedContent;
      'shared.content-pair': SharedContentPair;
      'shared.features-list': SharedFeaturesList;
      'shared.hero': SharedHero;
      'shared.media': SharedMedia;
      'shared.mobile-showcase-banner': SharedMobileShowcaseBanner;
      'shared.nav': SharedNav;
      'shared.quote': SharedQuote;
      'shared.review-section': SharedReviewSection;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tool': SharedTool;
      'shared.tools-section': SharedToolsSection;
      'shared.usertype1': SharedUsertype1;
      'shared.usertype2': SharedUsertype2;
    }
  }
}
