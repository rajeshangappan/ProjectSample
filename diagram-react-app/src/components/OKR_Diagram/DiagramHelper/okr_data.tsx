export class OkrJsonDataInfo {
    public name: string;
    public parent: string[];
    public id: string;
};
let okrJsonData: any = [
    { "name": "Parent P2", "id": "p2"},
    { "name": "Parent P1", "id": "p1", "parent": ["p2"] },
    { "name": "My Okr 1", "id": "okr1", "parent": ["p1"] },
    { "name": "My Contributor1", "id": "con1", "parent": ["okr1"] },
    { "name": "My Contributor2", "id": "con2", "parent": ["okr1"] },
    { "name": "My Contributor1.1", "id": "con1.1", "parent": ["con1"] },

    { "name": "2Parent P2", "id": "2p2"},
    { "name": "2Parent P1", "id": "2p1", "parent": ["2p2"] },
    { "name": "My Okr 2", "id": "okr2", "parent": ["2p1"] },
    { "name": "2My Contributor1", "id": "2con1", "parent": ["okr2"] },
    { "name": "2My Contributor2", "id": "2con2", "parent": ["okr2"] },
    { "name": "2My Contributor1.1", "id": "2con1.1", "parent": ["2con1"] }
]
export default okrJsonData;