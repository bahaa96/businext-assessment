export default interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  published_at: string;
  updated_at: string;
  starts_at: string;
  ends_at: string;
  only_submissions_after: string | null;
  visibility: string;
  featured: boolean;
  total_photos: number;
  current_user_contributions: Array<any>;
  total_current_user_submissions: number | null;
  links: {
    self: string;
    html: string;
    photos: string;
  };
  status: "open" | "closed";
  owners: Array<{
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string | null;
    last_name: string | null;
    twitter_username: string | null;
    portfolio_url: string;
    bio: string;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: 29;
    total_promoted_photos: 7;
    total_illustrations: 0;
    total_promoted_illustrations: 0;
    accepted_tos: true;
    for_hire: false;
    social: {
      instagram_username: string;
      portfolio_url: string;
      twitter_username: string;
      paypal_email: string | null;
    };
  }>;
  cover_photo: {
    id: string;
    slug: string;
    alternative_slugs: {
      en: string;
      es: string;
      ja: string;
      fr: string;
      it: string;
      ko: string;
      de: string;
      pt: string;
    };
    created_at: string;
    updated_at: string;
    promoted_at: string | null;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string | null;
    alt_description: string;
    breadcrumbs: Array<any>;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
      small_s3: string;
    };
    links: {
      self: string;
      html: string;
      download: string;
      download_location: string;
    };
    likes: number;
    liked_by_user: boolean;
    current_user_collections: Array<any>;
    sponsorship: string | null;
    topic_submissions: {
      health: {
        status: string;
      };
      nature: {
        status: string;
      };
      spirituality: {
        status: string;
      };
      "textures-patterns": {
        status: string;
      };
      travel: {
        status: string;
      };
      ugc: {
        status: string;
        approved_on: string;
      };
      wallpapers: {
        status: string;
      };
    };
    asset_type: string;
    user: {
      id: string;
      updated_at: string;
      username: string;
      name: string;
      first_name: string;
      last_name: string;
      twitter_username: string | null;
      portfolio_url: string;
      bio: string;
      location: string;
      links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
        following: string;
        followers: string;
      };
      profile_image: {
        small: string;
        medium: string;
        large: string;
      };
      instagram_username: null;
      total_collections: 11;
      total_likes: 0;
      total_photos: 705;
      total_promoted_photos: 14;
      total_illustrations: 0;
      total_promoted_illustrations: 0;
      accepted_tos: true;
      for_hire: true;
      social: {
        instagram_username: null;
        portfolio_url: "https://henryphd.com/";
        twitter_username: null;
        paypal_email: null;
      };
    };
  };
  preview_photos: Array<{
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    blur_hash: string;
    asset_type: string;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
      small_s3: string;
    };
  }>;
}
