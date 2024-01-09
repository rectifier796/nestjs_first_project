export interface Report{
    id:string;
    source:string;
    amount:number;
    created_at:Date;
    updated_at:Date;
    type:ReportType
}

export interface Data{
    report : Report[]
}

export enum ReportType{
    INCOME="income",
    EXPENSE="expense"
}

export const data: Data = {
    report:[
        {
            id: "1362d4e4-5b28-417e-93f3-1d4f3669231f",
            source: "Stock",
            amount: 10000,
            created_at: new Date('2024-01-07T08:53:17.433Z'),
            updated_at: new Date('2024-01-07T08:53:17.433Z'),
            type: ReportType.INCOME
        },
        {
            "id": "120dcf6d-1c1f-485d-88cd-84a61741f00e",
            "source": "Youtube",
            "amount": 13000,
            "created_at": new Date("2024-01-07T08:53:26.633Z"),
            "updated_at": new Date("2024-01-07T08:53:26.633Z"),
            "type": ReportType.INCOME
        },
        {
            "id": "12052438-c4fa-426d-a10e-47f58e821315",
            "source": "Salary",
            "amount": 20000,
            "created_at": new Date("2024-01-07T08:53:26.633Z"),
            "updated_at": new Date("2024-01-07T08:53:26.633Z"),
            "type": ReportType.INCOME
        },
        {
            "id": "1362d4e4-5b28-417e-93f3-1d4f3669231f",
            "source": "Food",
            "amount": 1300,
            "created_at": new Date("2024-01-07T08:51:54.381Z"),
            "updated_at": new Date("2024-01-07T08:51:54.381Z"),
            "type": ReportType.EXPENSE
        },
        {
            "id": "120dcf6d-1c1f-485d-88cd-84a61741f00e",
            "source": "Movie",
            "amount": 750,
            "created_at": new Date("2024-01-07T08:51:54.381Z"),
            "updated_at": new Date("2024-01-07T08:51:54.381Z"),
            "type": ReportType.EXPENSE
        },
        {
            "id": "12052438-c4fa-426d-a10e-47f58e821315",
            "source": "Travel",
            "amount": 4000,
            "created_at": new Date("2024-01-07T08:51:54.381Z"),
            "updated_at": new Date("2024-01-07T08:51:54.381Z"),
            "type": ReportType.EXPENSE
        }
    ]
}