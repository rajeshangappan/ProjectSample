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
    fill: "white",
    strokeWidth: 3
}
let nodeDefaultStyle: ShapeStyleModel = {
    strokeColor: "#C8C8C8",
    fill: 'white',
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
// let srcPortDefaultStyle: ShapeStyleModel = {
//     fill: 'white'
// }
// let srcPortTextDefaultStyle: ShapeStyleModel = {
//     fill: 'white'
// }
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
            if (!this.IsDecoratorHelper(node.id)) {
                if (Util.IsNullOrUndefined(node.children)) {
                    node.width = 300;
                    node.height = 25;
                    node.shape = {
                        type: 'Basic',
                        shape: 'Rectangle',
                        cornerRadius: 5
                    }
                }
                node.style = nodeDefaultStyle;
                for (let i: number = 0; i < node.annotations.length; i++)
                    node.annotations[i].constraints = AnnotationConstraints.ReadOnly;
            }
            node.ports = [DiagramHelper.leftMidPort, DiagramHelper.rightMidPort];
            node.constraints = NodeConstraints.Default & ~NodeConstraints.Select;
        }
        return node;
    }
    public static getConnectorDefaults(connector: ConnectorModel) {
        connector.sourceDecorator.shape = 'None';
        connector.targetDecorator.shape = 'None';
        connector.type = "Bezier";
        connector.style = connectorDefaultStyle;
        connector.sourcePortID = 'right-mid-port';
        connector.targetPortID = 'left-mid-port';
        connector.constraints = ConnectorConstraints.Default & ~ConnectorConstraints.Select;
        return connector;
    }
    public static onCreated() {
        this.CreateConnections();
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
    private static CreateConnections() {
        for (let i: number = 0; i < this.connectors.length; i++) {
            let link: ConnectorModel = this.connectors[i];
            let srcNode: NodeModel = this.GetNode(link.sourceID);
            let targetNode: NodeModel = this.GetNode(link.targetID);
            let newlinkPrefix: string = link.sourceID + "_" + link.targetID + "_linkHelper"
            let srcHelperNode: NodeModel = {
                id: newlinkPrefix + "_srcNode",
                width: 50,
                height: 15,
                style: {
                    strokeColor: nodeDefaultStyle.strokeColor,
                    fill: nodeDefaultStyle.strokeColor,
                    strokeWidth: 1
                },
                annotations: [{
                    content: '$30k',
                    style: {
                        color: 'white',
                        opacity: 0.5
                    }
                }],
                offsetX: srcNode.offsetX + srcNode.width / 2 + 25,
                offsetY: srcNode.offsetY
            }
            let targetHelperNode: NodeModel = {
                id: newlinkPrefix + "_targetNode",
                width: 50,
                height: 15,
                shape: {
                    type: 'Path',
                    data: 'M 0 5 L 5 0 L 20 0 L 20 10 L 5 10 z'
                },
                style: {
                    strokeColor: nodeDefaultStyle.strokeColor,
                    fill: 'white',
                    strokeWidth: 1
                },
                annotations: [{
                    content: '$16k',
                    style: {
                        color: nodeDefaultStyle.strokeColor
                    }
                }],
                offsetX: targetNode.offsetX - targetNode.width / 2 - 25,
                offsetY: targetNode.offsetY
            }
            this.diagramInstance.add(srcHelperNode);
            this.diagramInstance.add(targetHelperNode);

            let link1: ConnectorModel = {
                sourceID: link.sourceID,
                targetID: srcHelperNode.id,
                id: newlinkPrefix + "_link1",
                visible: false
            }

            let link2: ConnectorModel = {
                sourceID: srcHelperNode.id,
                targetID: targetHelperNode.id,
                id: newlinkPrefix + "_link2",
            }

            let link3: ConnectorModel = {
                sourceID: targetHelperNode.id,
                targetID: link.targetID,
                id: newlinkPrefix + "_link3",
                visible: false
            }

            this.diagramInstance.add(link1);
            this.diagramInstance.add(link2);
            this.diagramInstance.add(link3);
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
    private static IsDecoratorHelper(nodeId: string): boolean {
        return nodeId.indexOf('_linkHelper') >= 0;
    }
    private static SelectNode(nodeId: string) {
        this.SelectOutEdges(nodeId);
    }
    private static AddSelection(nodeModel: NodeModel) {
        if (this.IsDecoratorHelper(nodeModel.id)) {
            let textColor: string = 'white';
            if (nodeModel.id.indexOf("_srcNode") >= 0) {
                nodeModel.style.fill = nodeSelectedStyle.strokeColor;
            } else {
                textColor = nodeSelectedStyle.strokeColor;
            }
            if (!Util.IsNullOrUndefined(nodeModel.annotations) && nodeModel.annotations.length > 0) {
                nodeModel.annotations[0].style.color = textColor;
                nodeModel.annotations[0].style.opacity = 1;
            }
            nodeModel.style.strokeColor = nodeSelectedStyle.strokeColor;
        }
        else {
            nodeModel.style.strokeWidth = nodeSelectedStyle.strokeWidth;
            nodeModel.style.strokeColor = nodeSelectedStyle.strokeColor;
            nodeModel.style.fill = nodeSelectedStyle.fill;
        }
    }
    private static ClearSelection(nodeModel: NodeModel) {
        if (this.IsDecoratorHelper(nodeModel.id)) {
            let textColor: string = 'white';
            if (nodeModel.id.indexOf("_srcNode") >= 0) {
                nodeModel.style.fill = nodeDefaultStyle.strokeColor;
            }
            else {
                textColor = nodeDefaultStyle.strokeColor;
            }
            if (!Util.IsNullOrUndefined(nodeModel.annotations) && nodeModel.annotations.length > 0) {
                nodeModel.annotations[0].style.color = textColor;
                nodeModel.annotations[0].style.opacity = 0.5;
            }
            nodeModel.style.strokeColor = nodeDefaultStyle.strokeColor;
        }
        else {
            nodeModel.style.strokeWidth = nodeDefaultStyle.strokeWidth;
            nodeModel.style.strokeColor = nodeDefaultStyle.strokeColor;
            nodeModel.style.fill = nodeDefaultStyle.fill;
        }
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
                this.ClearSelection(nodes[i]);
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