import { z } from "zod";


export const applyUserAccountSchema = z.object({
    name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
    lastName: z.string().min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد"),
    email: z.string().email("ایمیل نامعتبر است"),
    mobile: z.string()
        .regex(/^(\+98|0)?9\d{9}$/, {
            message: "شماره موبایل معتبر نیست",
        })
});

export type UserAccountFormData = z.infer<typeof applyUserAccountSchema>;
