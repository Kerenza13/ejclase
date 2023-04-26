function calculateBMI(weight, height) {
    const heightInMeters =  height / 100;
    return weight / (heightInMeters * heightInMeters);
}
