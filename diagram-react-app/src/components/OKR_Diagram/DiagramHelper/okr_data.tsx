export class OkrJsonDataInfo {
    public name: string;
    public parent: string[];
    public objectiveUniqueId: string;
    public okrViewKeyResults: OkrJsonDataInfo[]
};
// let okrJsonData: any = [
//     { "name": "Parent P2", "id": "p2"},
//     { "name": "Parent P1", "id": "p1", "parent": ["p2"] },
//     { "name": "My Okr 1", "id": "okr1", "parent": ["p1"] },
//     { "name": "My Contributor1", "id": "con1", "parent": ["okr1"] },
//     { "name": "My Contributor2", "id": "con2", "parent": ["okr1"] },
//     { "name": "My Contributor1.1", "id": "con1.1", "parent": ["con1"] },

//     { "name": "2Parent P2", "id": "2p2"},
//     { "name": "2Parent P1", "id": "2p1", "parent": ["2p2"] },
//     { "name": "My Okr 2", "id": "okr2", "parent": ["2p1"] },
//     { "name": "2My Contributor1", "id": "2con1", "parent": ["okr2"] },
//     { "name": "2My Contributor2", "id": "2con2", "parent": ["okr2"] },
//     { "name": "2My Contributor1.1", "id": "2con1.1", "parent": ["2con1"] }
// ]

let okrJsonData: any = [
    {
        name: 'Parent OKR',
        objectiveUniqueId: '5511',
        parent: '',
        okrViewKeyResults: [],
        okrViewContributors: [
            {
                employeeId: 1498,
                firstName: 'Smrita',
                lastName: 'Gupta',
                designation: 'Senior Software Engineer',
                image: '',
                userType: ''
            },
            {
                employeeId: 398,
                firstName: 'Atik',
                lastName: 'Jain',
                designation: 'Senior Software Engineer',
                image:
                    'https://d1c4w4cknd36sb.cloudfront.net/ProfileImage/8b400028-f60b-4f71-9d92-9a206d50d43d.jpg?Expires=1923804330&Signature=DiQ3-bFDeIdG-5S~18m5MfxgkFp~qfBDaACHA~aDaioJ8cGWK7mIyV~axS69~JK~CoBhDHQJ3sf2BOsQUy~EtaM9rumO2qqMwLtZoyNy~v6RmOq8AIin76~8aguQivdI7oHYgsWAQXpFJGMJbeDm~aiElI-FsQaWEyZ0tLEkTLhcbko4uvbNIqWOLPaQegvekKKn90fbrp9AtC4iyTPXocFfRO2RaylBxywfLgG~9U02J-ANDRVu~YecYKfzyoyjSx3tlY3zYu4AhcFE6uzKJVm-ZkBt0r56qfqnY84lFW89ZSgrNdq2RHfDKQyFYAywUGt4pjyPiMJTNNyZw90fvQ__&Key-Pair-Id=APKAIUVT54QRP2NDQEKQ',
                userType: 'Owner'
            }
        ]
    },
    {
        name: 'Root OKR',
        objectiveUniqueId: '5512',
        parent: [5511],
        okrViewKeyResults: [
            {
                objectiveUniqueId: '6732',
                parent: [6731]
            }
        ],
        okrViewContributors: [
            {
                employeeId: 398,
                firstName: 'Rahul',
                lastName: 'Papnoi',
                designation: 'Senior Software Engineer',
                image: 'https://d1c4w4cknd36sb.cloudfront.net/ProfileImage/8b400028-f60b-4f71-9d92-9a206d50d43d.jpg?Expires=1923804330&Signature=DiQ3-bFDeIdG-5S~18m5MfxgkFp~qfBDaACHA~aDaioJ8cGWK7mIyV~axS69~JK~CoBhDHQJ3sf2BOsQUy~EtaM9rumO2qqMwLtZoyNy~v6RmOq8AIin76~8aguQivdI7oHYgsWAQXpFJGMJbeDm~aiElI-FsQaWEyZ0tLEkTLhcbko4uvbNIqWOLPaQegvekKKn90fbrp9AtC4iyTPXocFfRO2RaylBxywfLgG~9U02J-ANDRVu~YecYKfzyoyjSx3tlY3zYu4AhcFE6uzKJVm-ZkBt0r56qfqnY84lFW89ZSgrNdq2RHfDKQyFYAywUGt4pjyPiMJTNNyZw90fvQ__&Key-Pair-Id=APKAIUVT54QRP2NDQEKQ',
                userType: 'Owner',
            },
            {
                employeeId: 1498,
                firstName: 'Smrita',
                lastName: 'Gupta',
                designation: 'Senior Software Engineer',
                image: '',
                userType: '',
            }
        ]
    },
    {
        name: 'Child OKR',
        objectiveUniqueId: '5513',
        parent: [5512],
        okrViewKeyResults: [
            {
                objectiveUniqueId: '6735',
                parent: [6731]
            }
        ],
        okrViewContributors: [
            {
                employeeId: 1498,
                firstName: 'Smrita',
                lastName: 'Gupta',
                designation: 'Senior Software Engineer',
                image: '',
                userType: 'Owner',
            }
        ]
    },
    {
        name: 'Child OKR 2',
        objectiveUniqueId: '5514',
        parent: [5512],
        okrViewKeyResults: [
            {
                objectiveUniqueId: '6736',
                parent: [6731]
            }
        ],
        okrViewContributors: [
            {
                employeeId: 1498,
                firstName: 'Smrita',
                lastName: 'Gupta',
                designation: 'Senior Software Engineer',
                image: '',
                userType: 'Owner',
            }
        ]
    },
    {
        parent: '',
        objectiveUniqueId: '6731',
        name: 'KR Parent',
        okrViewKeyResults: [],
        okrViewContributors: [
            {
                employeeId: 1498,
                firstName: 'Jay',
                lastName: 'singh',
                designation: 'Senior Software Engineer',
                image: '',
                userType: 'Owner',
            }
        ]
    },
    {
        objectiveUniqueId: '6733',
        parent: [6731],
        name: 'KR Child',
        okrViewKeyResults: [],
        okrViewContributors: [
            {
                employeeId: 1498,
                firstName: 'Satish',
                lastName: 'Purohit',
                designation: 'Senior Software Engineer',
                image: '',
                userType: 'Owner',
            }
        ]
    }
]
export default okrJsonData;