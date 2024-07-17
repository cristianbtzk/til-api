export interface ITopic {
  id: Uint8Array;
  title: string;
  completed: boolean;
  user_id: string;
  created_at: Date;
}
