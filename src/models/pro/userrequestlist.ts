export interface RootObject {
  data: UserRequestList[];
  next_page: string;
  message: string;
  status: string;
}

export interface UserRequestList {
  id: number;
  user_id: number;
  service_id: number;
  postcode_id: number;
  file?: string;
  comment: string;
  status: string;
  is_closed: string;
  price?: string;
  price_type?: string;
  close_answer?: string;
  created_at: string;
  updated_at: string;
  service: Service;
  user: User;
  user_bussiness?: Userbussiness;
  answers: Answer[];
}

export interface Answer {
  id: number;
  user_request_id: number;
  question_id: number;
  answer: string;
  created_at: string;
  updated_at: string;
  question: Question;
}

export interface Question {
  id: number;
  title: string;
  service_id: number;
  answers: string[];
  created_at: string;
  updated_at: string;
}

export interface Userbussiness {
  id: number;
  user_id: number;
  name: string;
  image: string;
  description: string;
  email?: any;
  mobile_number?: any;
  website_url?: any;
  facebook_url?: any;
  twitter_url?: any;
  instagram_url?: any;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  full_name: string;
  mobile_number?: string;
  address?: string;
  city?: string;
  postcode_id?: number;
  bio?: string;
  email: string;
  is_email_verified: string;
  is_mobile_verified: string;
  img_avatar?: string;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
}