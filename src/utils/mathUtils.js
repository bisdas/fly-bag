export const getDiscountPercentage = (actualprice, sellingPrice) => {
    if (actualprice <= sellingPrice) {
        return 0;
    }

    const percentage = sellingPrice * 100 / actualprice
    return Math.round(100 - percentage);
}

