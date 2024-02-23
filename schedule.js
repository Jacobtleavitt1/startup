class scheduleItem {
    day;
    name;
    complete;

    scheduleItem(_day, _name, _complete) {
        this.day = _day;
        this.complete = _complete
        this.name = _name
    }
}

class schedule {
    items;
    numItems;

    addItem(item) {
        this.items[this.numItems] = item
    }
}

