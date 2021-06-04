import { DiagramComponent, NodeModel } from "@syncfusion/ej2-react-diagrams";
import { Util } from "../../../model/util";
import { CustomDiagramLayout } from "./diagram-layout";
import { OkrJsonDataInfo } from "./okr_data";
export class DiagramHelper {
    diagramIns: DiagramComponent;
    layout: CustomDiagramLayout;
    constructor(diagramInstance: DiagramComponent) {
        this.SetDiagramInstance(diagramInstance);
    }
    SetDiagramInstance(diagramInstance: DiagramComponent) {
        this.diagramIns = diagramInstance;
        if (Util.IsNullOrUndefined(this.layout)) {
            this.layout = new CustomDiagramLayout(this.diagramIns);
        }
    }
    public OnDiagramCreated(diagramInstance: DiagramComponent) {
        this.SetDiagramInstance(diagramInstance);
        //this.PrepareKeyResultChilds();   
        this.layout.DockToTop(diagramInstance);     
        this.diagramIns.nodes.forEach((item, index, array) => {
            item.visible = true;
        });
        this.diagramIns.connectors.forEach((item, index, array) => {
            item.visible = true;
        });
        //this.diagramIns.fitToPage();
    }
    private PrepareKeyResultChilds() {
        let nodes: NodeModel[] = this.diagramIns.nodes;
        for (let i: number = 0; i < nodes.length; i++) {
            let data: OkrJsonDataInfo = nodes[i].data as OkrJsonDataInfo;
            let top: number = nodes[i].height;
            if (!Util.IsNullOrUndefined(data) && !Util.IsNullOrUndefined(data.okrViewKeyResults) && data.okrViewKeyResults.length > 0) {
                for (let j: number = 0; j < data.okrViewKeyResults.length; j++) {
                    let childNode: NodeModel = {
                        id: data.okrViewKeyResults[j].objectiveUniqueId,
                        width: 200,
                        height: 35,
                        offsetX: 0,
                        offsetY: 0,
                        margin: { left: 0, right: 0, top: top - 35, bottom: 0 },
                        excludeFromLayout: true,
                        annotations: [{
                            content: data.okrViewKeyResults[j].objectiveUniqueId
                        }],
                        visible: false
                    }
                    this.diagramIns.addChild(nodes[i], childNode);
                    top -= 35;
                }
            }
        }
    }
}