/*
 * This object serves as a backing data store. It implements a listener system so that listeners can have their state
 * updated whenever their group of items changes
 */

class PersonStore {
    listeners = {}
    items = {}

    addListener (itemType, listener){
        if (!this.listeners[itemType]){
            this.listeners[itemType] = [listener]
        } else {
            this.listeners.itemType.push(listener)
        }
    }

    addItem(id,type,item) {
        if(!this.items[type]){
            this.items[type] = {}
        }
        this.items[type][id]=item
        this.notifyListeners(type)
    }

    removeItem(id,type) {
        if(this.items[type] && this.items[type][id]) {
            delete this.items[type][id]
            this.notifyListeners(type)
        }
    }

    notifyListeners(type) {
        if(this.listeners[type]){
            this.listeners.type.map(function(listener){
                listener.setState({items: this.items[type]})
                return listener
            })
        }
    }

    getItems(type) {
        return this.items[type]
    }

    moveItem(id,fromType,toType) {
        var item = this.getItems(fromType)[id]
        this.removeItem(id,fromType)
        this.addItem(id,toType,item)
    }
}

export default PersonStore