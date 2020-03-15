const createMultiplier = y => x => x * y;

const double = x => createMultiplier(2);
const triple = x => createMultiplier(3);
const quadruple = x => createMultiplier(4);

double(3);