function power(b, e) {
    if (e === 0) return 1;
    if (e === 1) return b;

    return b * power(b, e - 1);
}
