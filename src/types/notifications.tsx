export type NotificationType = {
    id: number;
    user_id: string;
    type_notification: string;
    message: string;
    data: object;
    read: boolean;
    created_at: string;
    updated_at: string;
};
