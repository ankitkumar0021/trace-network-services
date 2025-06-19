export interface IBlogsAPIResponse {
  http_status_code: number;
  http_status_msg: string;
  success: boolean;
  data?: IBlogsAPIResponseData[] | null;
  message: string;
  timestamp: string;
}
export interface IBlogsAPIResponseData {
  _id: string;
  title: string;
  status: boolean;
  slug: string;
  content: string;
  createdBy: CreatedBy;
  deletedAt?: null;
  banner_image: string;
  createdAt: string;
  updatedAt: string;
  id: number;
  __v: number;
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string | null;
  og_tag?: string | null;
  schema_markup?: string | null;
}
export interface CreatedBy {
  is_verified: boolean;
  bio: string;
  zone_id?: null;
  fcm_token?: null[] | null;
  deletedAt?: null;
  _id: string;
  name: string;
  phone_number: string;
  email: string;
  password: string;
  dob: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  id: number;
  __v: number;
  profile_pic: string;
  about: string;
  designation: string;
  qualification: string;
}
