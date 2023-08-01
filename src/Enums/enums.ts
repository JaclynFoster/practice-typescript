//Enums allow us to define a set of named constants and we can give these a number or string value

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
}

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    ERROR = 234 //example do not have to be all of one type
}

ArrowKeys.LEFT