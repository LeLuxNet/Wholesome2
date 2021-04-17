/// <reference path="../../index.d.ts" />
declare namespace Api {
  export interface SubmissionWrap {
    kind: "t3";
    data: Submission;
  }

  export type Submission = BodySubmission | GallerySubmission;

  interface BodySubmission extends BaseSubmission {
    selftext: string;
    selftext_html: string;
    is_self: true;
  }

  interface GallerySubmission extends BaseSubmission {
    selftext: "";
    selftext_html: null;
    is_self: false;

    is_gallery: true;
    media_metadata: MediaMetadata;
    gallery_data: Gallery;
  }

  interface BaseSubmission extends Thing, Votable, Authored, Created {
    approved_at_utc: number | null;
    subreddit: string;
    user_reports: unknown[];
    saved: boolean;
    mod_reason_title: null;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: UserFlair[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: 0 | 6;
    link_flair_css_class: "" | null;
    thumbnail_height: number | null;
    top_awarded_type: null;
    parent_whitelist_status: WhitelistStatus;
    hide_score: boolean;
    quarantine: boolean;
    link_flair_text_color: "dark";
    upvote_ratio: number;
    subreddit_type: SubredditType;
    total_awards_received: number;
    media_embed: {};
    thumbnail_width: number | null;
    is_original_content: boolean;
    rpan_video?: {
      hls_url: string;
      scrubber_media_url: string;
    };
    secure_media?: SecureMedia | null;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category: null;
    secure_media_embed: {};
    link_flair_text: string;
    can_mod_post: boolean;
    approved_by: string | null;
    thumbnail: "default" | "self" | "nsfw" | "spoiler" | string;
    edited: number | false;
    gildings: Gildings;
    post_hint?: "image";
    content_categories: null;
    mod_note: null;
    crosspost_parent_list: Submission[];
    created: number;
    link_flair_type: FlairType;
    wls: 6;
    removed_by_category: null;
    banned_by: string | null;
    domain: string;
    allow_live_comments: boolean;
    suggested_sort: null;
    banned_at_utc: number | null;
    url_overridden_by_dest: string;
    view_count: null;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview?: Preview;
    all_awardings: Award[];
    awarders: [];
    media_only: boolean;
    link_flair_template_id: string;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    treatment_tags: [];
    rte_mode?: "markdown";
    visited: boolean;
    removed_by: null;
    num_reports: null;
    distinguished: Distinguish;
    subreddit_id: string;
    mod_reason_by: null;
    removal_reason: null;
    link_flair_background_color: "" | string;
    is_robot_indexable: boolean;
    num_duplicates: number;
    report_reasons: null;
    discussion_type: null;
    num_comments: number;
    send_replies: true;
    media: null;
    contest_mode: boolean;
    poll_data?: Poll;
    permalink: string;
    whitelist_status: WhitelistStatus;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    num_crossposts: number;
    mod_reports: [];
    is_video: boolean;
  }

  type WhitelistStatus = "no_ads" | "all_ads";

  type SecureMedia =
    | {}
    | { reddit_video: Video }
    | { oembed: Embed; type: string };

  interface Gildings {
    [key: string]: number;
  }
}
