export class Expense {
    amount: number;
    authorId: any;
    authorName: string;
    expenseID: number;
    receipt: string;
    resolvedAt: string;
    resolverName: string;
    status: string;
    submittedAt: string;
    type: string;
    desciption: string;
    constructor(amount: number, authorId: any,  authorName: string, expenseID: number, receipt: string, resolvedAt: string,
                resolverName: string, status: string, submmittedAt: string, type: string, desc: string) {
        this.amount = amount;
        this.authorName = authorName;
        this.expenseID = expenseID;
        this.receipt = receipt;
        this.resolvedAt = resolvedAt;
        this.resolverName = resolverName;
        this.submittedAt = submmittedAt;
        this.type = type;
        this.status = status;
        this.desciption = desc;
        this.authorId = authorId;
    }
}
