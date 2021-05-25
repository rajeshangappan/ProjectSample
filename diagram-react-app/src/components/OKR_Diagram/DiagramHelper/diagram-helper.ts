import { ConnectorModel, DiagramComponent, IClickEventArgs, NodeModel, PointPortModel, PortVisibility, Node, NodeConstraints, AnnotationConstraints, ShapeStyle, ShapeStyleModel, ConnectorConstraints } from "@syncfusion/ej2-react-diagrams";
import { Util } from "../../../model/util";

export class NodeInfo {
    public isLeftMidPort: boolean = false;
    public isExpanded: boolean = false;
    constructor(_isExpanded?: boolean) {
        this.isExpanded = (_isExpanded === null || this.isExpanded === undefined) ? false : this.isExpanded;
    }
}
let nodeSelectedStyle: ShapeStyleModel = {
    strokeColor: "rgba(57,158,247,255)",
    strokeWidth: 4
}
let nodeDefaultStyle: ShapeStyleModel = {
    strokeColor: "#C8C8C8",
    strokeWidth: 1
}
let connectorDefaultStyle: ShapeStyleModel = {
    strokeColor: "#C8C8C8",
    strokeWidth: 1
}
let connectorSelectedStyle: ShapeStyleModel = {
    strokeColor: "rgba(57,158,247,255)",
    strokeWidth: 2
}
export class DiagramHelper {
    public static diagramInstance: DiagramComponent;

    public static leftMidPort: PointPortModel = {
        style: {
            strokeColor: '#366F8C',
            fill: '#366F8C'
        },
        shape: 'Square',
        id: 'left-mid-port',
        visibility: PortVisibility.Hidden,
        offset: {
            x: 0,
            y: 0.5
        }
    };
    public static rightMidPort: PointPortModel = {
        style: {
            strokeColor: '#366F8C',
            fill: '#366F8C'
        },
        shape: 'Square',
        id: 'right-mid-port',
        visibility: PortVisibility.Hidden,
        offset: {
            x: 1,
            y: 0.5
        }
    };
    public static nodes: NodeModel[] = [
        {
            id: "hidden_node_1",
            offsetX: 5,
            offsetY: 5,
            visible: false,
            data: new NodeInfo()
        },
        {
            id: "node1",
            offsetX: 5,
            offsetY: 65,
            annotations: [{ content: "Increase each store weekly sales from $10k" }],
            data: new NodeInfo()
        },
        {
            id: "node2",
            offsetX: 5,
            offsetY: 95,
            annotations: [{ content: "Schedule and complete quarterly OKR planning" }],
            data: new NodeInfo()
        },
        {
            id: 'group1',
            offsetX: 270,
            offsetY: 80,
            children: ['hidden_node_1', 'node1', 'node2'],
            annotations: [{ offset: { x: 0.5, y: -0.1 }, content: "My OKRs" }]
        },
        {
            id: "hidden_node_2",
            offsetX: 5,
            offsetY: 5,
            visible: false,
            data: new NodeInfo()
        },
        {
            id: "node3",
            offsetX: 5,
            offsetY: 65,
            annotations: [{ content: "Increase each store weekly sales from $10k" }],
            data: new NodeInfo()
        },
        {
            id: "node4",
            offsetX: 5,
            offsetY: 95,
            annotations: [{ content: "Ensure 100% of employee are performing well" }],
            data: new NodeInfo()
        },
        {
            id: 'group2',
            offsetX: 750,
            offsetY: 80,
            children: ['hidden_node_2', 'node3', 'node4'],
            annotations: [{ offset: { x: 0.5, y: -0.1 }, content: "My Contributors" }]
        },
        {
            id: "hidden_node_3",
            offsetX: 5,
            offsetY: 5,
            visible: false,
            data: new NodeInfo()
        },
        {
            id: "node5",
            offsetX: 5,
            offsetY: 65,
            annotations: [{ content: "Increase each store weekly sales from $20k" }],
            data: new NodeInfo()
        },
        {
            id: "node6",
            offsetX: 5,
            offsetY: 95,
            annotations: [{ content: "Ensure every manager is doing one to one meeting" }],
            data: new NodeInfo()
        },
        {
            id: 'group3',
            offsetX: 750,
            offsetY: 260,
            children: ['hidden_node_3', 'node5', 'node6'],
            annotations: [{ offset: { x: 0.5, y: -0.1 }, content: "" }]
        },
        {
            id: "hidden_node_4",
            offsetX: 5,
            offsetY: 5,
            visible: false,
            data: new NodeInfo()
        },
        {
            id: "node7",
            offsetX: 5,
            offsetY: 65,
            annotations: [{ content: "Increase each store weekly sales from $30k" }],
        },
        {
            id: "node8",
            offsetX: 5,
            offsetY: 95,
            annotations: [{ content: "Ensure 100% of employee are performing well" }],
            data: new NodeInfo(),
        },
        {
            id: 'group4',
            offsetX: 750,
            offsetY: 500,
            children: ['hidden_node_4', 'node7', 'node8'],
            annotations: [{ offset: { x: 0.5, y: -0.1 }, content: "" }]
        }
    ];
    public static connectors: ConnectorModel[] = [
        {
            id: "link1",
            sourceID: "node1",
            targetID: "node3"
        },
        {
            id: "link2",
            sourceID: "node1",
            targetID: "node5"
        },
        {
            id: "link3",
            sourceID: "node1",
            targetID: "node7"
        },
        {
            id: "link4",
            sourceID: "node2",
            targetID: "node4"
        },
        {
            id: "link5",
            sourceID: "node2",
            targetID: "node6"
        },
        {
            id: "link6",
            sourceID: "node2",
            targetID: "node8"
        }
    ];
    public static getNodeDefaults(node: NodeModel) {
        if ((node as Node).status != 'Update') {
            node.ports = [DiagramHelper.leftMidPort, DiagramHelper.rightMidPort];
            if (Util.IsNullOrUndefined(node.children)) {
                node.width = 300;
                node.height = 25;
                node.shape = {
                    type: 'Basic',
                    shape: 'Rectangle',
                    cornerRadius: 5
                }
            }
            // else {
            node.constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            // }
            node.style = nodeDefaultStyle;
            for (let i: number = 0; i < node.annotations.length; i++)
                node.annotations[i].constraints = AnnotationConstraints.ReadOnly;
        }
        return node;
    }
    public static getConnectorDefaults(connector: ConnectorModel) {
        connector.sourceDecorator = {
            shape: 'Square',
            style: {
                strokeWidth: 3,
                fill : connectorDefaultStyle.strokeColor,
                strokeColor: connectorDefaultStyle.strokeColor,
                opacity: .2
            }
        }
        connector.targetDecorator = {
            shape: 'Custom',
            pathData: 'M80.5,12.5 C80.5,19.127417 62.59139,24.5 40.5,24.5 C18.40861,24.5 0.5,19.127417 0.5,12.5' +
                'C0.5,5.872583 18.40861,0.5 40.5,0.5 C62.59139,0.5 80.5,5.872583 80.5,12.5 z',
            style: {
                strokeWidth: 3,
                strokeColor: 'green',
                opacity: .2
            },
        }
        connector.type = "Bezier";
        connector.style = connectorDefaultStyle;
        connector.sourcePortID = 'right-mid-port';
        connector.targetPortID = 'left-mid-port';
        connector.constraints = ConnectorConstraints.Default & ~ConnectorConstraints.Select;
        return connector;
    }
    public static onCreated() {
        for (let i: number = 0; i < DiagramHelper.connectors.length; i++) {
            //DiagramHelper.connectors[i].visible = false;
            DiagramHelper.diagramInstance.add(DiagramHelper.connectors[i]);
        }
    }
    public static onClick(args: IClickEventArgs) {
        if (args.actualObject instanceof Node) {
            let node: Node = args.actualObject as Node;
            if (node != null) {
                this.SelectConnectedNodes(args.actualObject);
                //this.diagramInstance.refreshDiagram();
            }
        }
    }
    private static GetNode(nodeId: string): NodeModel {
        let nodeModel: NodeModel = this.diagramInstance.nodes.find(({ id }) => id === nodeId);
        return nodeModel;
    }
    private static GetConnector(connectorId: string): ConnectorModel {
        let connModel: ConnectorModel = this.diagramInstance.connectors.find(({ id }) => id === connectorId);
        return connModel;
    }
    private static SelectConnectedNodes(node: Node) {
        if (Util.IsNullOrUndefined(node.children)) {
            this.ResetNodesStye();
            this.ResetConnectorStye();
            if (Util.IsNullOrUndefined(node.inEdges) || node.inEdges.length == 0) {
                this.SelectNode(node.id);
            }
        }
    }
    private static SelectNode(nodeId: string) {
        this.SelectOutEdges(nodeId);
    }
    private static AddSelection(nodeModel: NodeModel) {
        nodeModel.style.strokeColor = nodeSelectedStyle.strokeColor;
        nodeModel.style.strokeWidth = nodeSelectedStyle.strokeWidth;
    }
    private static SelectOutEdges(nodeId: string) {
        let nodeModel: NodeModel = this.GetNode(nodeId);
        let node: Node = nodeModel as Node;
        this.AddSelection(nodeModel);
        if (!Util.IsNullOrUndefined(node.outEdges) && node.outEdges.length > 0) {
            for (let i: number = 0; i < node.outEdges.length; i++) {
                let edge: ConnectorModel = this.GetConnector(node.outEdges[i]);
                edge.style.strokeColor = connectorSelectedStyle.strokeColor;
                edge.style.strokeWidth = connectorSelectedStyle.strokeWidth;
                this.SelectOutEdges(edge.targetID);
            }
        }
    }
    private static ResetNodesStye() {
        let nodes: NodeModel[] = this.diagramInstance.nodes;
        for (let i: number = 0; i < nodes.length; i++) {
            if (Util.IsNullOrUndefined(nodes[i].children)) {
                nodes[i].style = nodeDefaultStyle;
            }
        }
    }
    private static ResetConnectorStye() {
        let conns: ConnectorModel[] = this.diagramInstance.connectors;
        for (let i: number = 0; i < conns.length; i++) {
            conns[i].style = connectorDefaultStyle;
        }
    }
    private static ExpandCollapseNode(node: Node) {
        let expandInfo: NodeInfo = node.data as NodeInfo;
        let isExpand: boolean = !expandInfo.isExpanded;
        let connectorIds: string[] = node.outEdges;
        let connectorObj: ConnectorModel;
        let nodeObj: NodeModel;
        let parentId: string;
        for (let i: number = 0; i < connectorIds.length; i++) {
            connectorObj = this.diagramInstance.getConnectorObject(connectorIds[i]);
            nodeObj = this.diagramInstance.getNodeObject(connectorObj.targetID);
            let c: ConnectorModel = this.diagramInstance.connectors.find(({ id }) => id === connectorObj.id);
            //c.visible = isExpand;
            parentId = this.diagramInstance.getParentId(nodeObj.id);
            if (parentId !== '' && parentId !== null) {
                let n: NodeModel = this.diagramInstance.nodes.find(({ id }) => id === parentId);
                //n.visible = isExpand;
            }
            expandInfo.isExpanded = isExpand;
        }
    }
}