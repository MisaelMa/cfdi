
export const sortObject = (obj: Record<string, any>, order: string[]): Record<string, any> => {
    return order.reduce((acc: Record<string, any>, key: string) => {
        if (key in obj) acc[key] = obj[key];
        return acc;
      }, {});
      
}  