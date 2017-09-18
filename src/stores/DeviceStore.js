import { observable, computed } from 'mobx';

export default class DeviceStore {
    @observable devices = [
        { thumbnail: 'http://placehold.it/400x165', id: 1, name: "Switch 1" },
        { thumbnail: 'http://placehold.it/400x165', id: 2, name: "Dimmer 2" },
        { thumbnail: 'http://placehold.it/400x165', id: 3, name: "ABC" },
        { thumbnail: 'http://placehold.it/400x165', id: 4, name: "ABC" },
        { thumbnail: 'http://placehold.it/400x165', id: 5, name: "ABC" },
        { thumbnail: 'http://placehold.it/400x165', id: 6, name: "ABC" },
        { thumbnail: 'http://placehold.it/400x165', id: 7, name: "ABC" },
        { thumbnail: 'http://placehold.it/400x165', id: 8, name: "ABC" },
        { thumbnail: 'http://placehold.it/400x165', id: 9, name: "ABC" },
    ]

    getById(id) {
        for (const device of this.devices) {
            if (id === device.id) {
                return device;
            }
        }
        return null;
    }

}
