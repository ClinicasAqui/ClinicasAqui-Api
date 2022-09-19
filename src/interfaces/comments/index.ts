export interface ICreateReplyAnonymous {
  title?: string | null;
  message: string;
  rating: string;
  clinicId: string;
}

export interface ICreateReplyUser {
  title?: string | null;
  message: string;
  rating: string;
  clinicId: string;
  userId : string
}