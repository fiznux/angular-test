export interface FormInterface {
  firstName: string;
  lastName: string;
  emailAddress: string;
  gender?: string;
  age?: number;
  testimonial?: string;

  [key: string]: any;
}

export interface FormApiResponse {
  message: string;
  success: boolean;
  data: FormInterface;
}
