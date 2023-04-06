export type TabPanelProps = {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export type NotificationType = {
    data: {}
    message: string
    type: string
}

export type NotificationProps<Item> = {
    data: Item[]
}