import { ConnectorModel, DiagramComponent, NodeModel, Node as DNode } from "@syncfusion/ej2-react-diagrams";
import { Util } from "../../../model/util";

export class CustomDiagramLayout {
    diagramIns: DiagramComponent;
    public layoutNodes: NodeModel[];
    constructor(diagramInstance: DiagramComponent) {
        this.SetDiagramInstance(diagramInstance);
    }
    SetDiagramInstance(diagramInstance: DiagramComponent) {
        this.diagramIns = diagramInstance;
    }
    /**
     * @private
     */
    public DockToTop(diagramInstance: DiagramComponent) {
        this.SetDiagramInstance(diagramInstance);
        this.MoveToTop();
    }
    private GetLayoutNodes(): NodeModel[] {
        if (Util.IsNullOrUndefined(this.layoutNodes)) {
            this.layoutNodes = this.diagramIns.nodes.filter((item, index, array) => !item.excludeFromLayout);
        }
        return this.layoutNodes;
    }
    private MoveToTop() {
        let levelOffsetX: number[] = this.GetAllLevelsXValues();
        for (let i: number = 0; i < levelOffsetX.length; i++) {
            let nodes: NodeModel[] = this.GetSameLevelNodes(levelOffsetX[i]);
            let lastY: number = 0;
            let prevNode: NodeModel;
            nodes.forEach((item, index, array) => {
                let lowYChildNode: NodeModel = this.GetLowestYNode(item["outEdges"]);
                if (lowYChildNode !== null && lowYChildNode !== undefined) {
                    if (index === 0 && this.IsSibling(item, prevNode)) {
                        item.offsetY = lowYChildNode.offsetY;
                    }
                    else {
                        if (lastY < lowYChildNode.offsetY) {
                            item.offsetY = lowYChildNode.offsetY;
                        } else {
                            item.offsetY = lastY;
                        }
                    }
                    lastY = item.offsetY + item.height + this.diagramIns.layout.verticalSpacing;
                    prevNode = item;
                }
                item.visible = true;
            });
        }
    }
    private GetLowestYNode(outEdges: string[]): NodeModel {
        let node: NodeModel;
        if (outEdges !== null && outEdges !== undefined && outEdges.length > 0) {
            let cnode: NodeModel;
            for (let i: number = 0; i < outEdges.length; i++) {
                let edge: ConnectorModel = this.diagramIns.getConnectorObject(outEdges[i]);
                cnode = this.diagramIns.getNodeObject(edge.targetID);
                if (node === null || node === undefined || cnode.offsetY < node.offsetY) {
                    node = cnode;
                }
            }
        }
        return node;
    }
    private GetAllLevelsXValues(): number[] {
        let allOffsetX: number[] = this.GetLayoutNodes().map(x => x.offsetX);
        let uniqueX: number[] = allOffsetX.filter((item, index) => { return allOffsetX.indexOf(item) === index; });
        return uniqueX.sort(function (n1, n2) { return n2 - n1 }); //descending order
    }
    private GetSameLevelNodes(offsetX: number): NodeModel[] {
        return this.GetLayoutNodes().filter((item, index, array) => item.offsetX === offsetX).sort(function (n1, n2) { return n1.offsetY - n2.offsetY });
    }
    private IsSibling(node1: NodeModel, node2: NodeModel): boolean {
        let inEdges1: string[] = (node1 as DNode).inEdges;
        let inEdges2: string[] = (node1 as DNode).inEdges;
        if (inEdges1 !== null && inEdges1 !== undefined && inEdges2 !== null && inEdges2 !== undefined) {
            for (let i: number = 0; i < inEdges1.length; i++) {
                for (let j: number = 0; j < inEdges2.length; j++) {
                    if (inEdges1[i] == inEdges2[j]) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}