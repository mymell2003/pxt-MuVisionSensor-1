//% color="#ff6600" weight=20 icon="\uf085"
namespace Mu視覺感測器 {
    export enum SENSORS {
        //% block="MU00"
        MU00,
        //% block="MU01"
        MU01,
        //% block="MU10"
        MU10,
        //% block="MU11"
        MU11
    }
    export enum PORT {
        //% blockId=Port_I2C block="I2C"
        I2C=1,
        //% blockId=Port_Serial block="Serial"
        Serial=0,
    }
    export enum VISION_TYPE {
        //% block="🌈 顏色檢測"
        VISION_COLOR_DETECT=1,
        //% block="🌈 顏色識別"
        VISION_COLOR_RECOGNITION=2,
        //% block="⚽ 球體檢測"
        VISION_BALL_DETECT=3,
        //% block="👥 人體檢測"
        VISION_BODY_DETECT=5,
        //% block="🔳 形狀卡片"
        VISION_SHAPE_CARD_DETECT=6,
        //% block="🔳 交通卡片"
        VISION_TRAFFIC_CARD_DETECT=7,
        //% block="🔳 數字卡片"
        VISION_NUM_CARD_DETECT=8
    }
    export enum _VISION_TYPE {
        //% block="🌈 顏色檢測"
        VISION_COLOR_DETECT=1,
        //% block="⚽ 球體檢測"
        VISION_BALL_DETECT=3,
        //% block="👥 人體檢測"
        VISION_BODY_DETECT=5,
        //% block="🔳 形狀卡片"
        VISION_SHAPE_CARD_DETECT=6,
        //% block="🔳 交通卡片"
        VISION_TRAFFIC_CARD_DETECT=7,
        //% block="🔳 數字卡片"
        VISION_NUM_CARD_DETECT=8
    }
    export enum CARD_TYPE {
        //% block="🔳 形狀卡片"
        VISION_SHAPE_CARD_DETECT=6,
        //% block="🔳 交通卡片"
        VISION_TRAFFIC_CARD_DETECT,
        //% block="🔳 數字卡片"
        VISION_NUM_CARD_DETECT
    }
    export enum TRAFFIC_CARD_TYPE {
        //% block="⬆ 向前"
        TRAFFIC_CARD_FORWARD=1,
        //% block="⬅ 向左"
        TRAFFIC_CARD_LEFT,
        //% block="➡ 向右"
        TRAFFIC_CARD_RIGHT,
        //% block="🔙 掉頭"
        TRAFFIC_CARD_TURN_AROUND,
        //% block="🅿️ 停車"
        TRAFFIC_CARD_PARK
    }
    export enum SHAPE_CARD_TYPE {
        //% block="✔ 勾"
        SHAPE_CARD_TICK=1,
        //% block="✖ 叉"
        SHAPE_CARD_CROSS,
        //% block="⭕ 圓形"
        SHAPE_CARD_CIRCLE,
        //% block="◻ 方形"
        SHAPE_CARD_SQUARE,
        //% block="🛆 三角形"
        SHAPE_CARD_TRIANGLE
    }
    export enum LED_COLOR_TYPE {
        //% block="關"
        LED_BLACK=0,
        //% block="紅"
        LED_RED,
        //% block="綠"
        LED_GREEN,
        //% block="藍"
        LED_BLUE,
        //% block="黃"
        LED_YELLOW,
        //% block="紫"
        LED_PURPLE,
        //% block="青"
        LED_CYAN,
        //% block="白"
        LED_WHITE
    }
    export enum COLOR_TYPE {
        //% block="黑"
        BLACK=1,
        //% block="白"
        WHITE,
        //% block="紅"
        RED,
        //% block="黃"
        YELLOW,
        //% block="綠"
        GREEN,
        //% block="青"
        CYAN,
        //% block="藍"
        BLUE,
        //% block="紫"
        PURPLE,
        //% block="其他"
        UNKOWN=0
    }
    export enum NUM_CARD_TYPE {
        //% block="1"
        NUM_CARD_1=1,
        //% block="2"
        NUM_CARD_2,
        //% block="3"
        NUM_CARD_3,
        //% block="4"
        NUM_CARD_4,
        //% block="5"
        NUM_CARD_5,
        //% block="6"
        NUM_CARD_6,
        //% block="7"
        NUM_CARD_7,
        //% block="8"
        NUM_CARD_8,
        //% block="9"
        NUM_CARD_9,
        //% block="0"
        NUM_CARD_0,
    }
    export enum VisionLevel {
        //% block="自動"
        LEVEL_AUTO=0,
        //% block="速度優先"
        LEVEL_HIGH_SPEED,
        //% block="性能均衡"
        LEVEL_NORMAL,
        //% block="準確率優先"
        LEVEL_HIGH_ACCURACY
    }
    export enum VisionZoom {
        //% block="自動"
        Default,
        //% block="等級1"
        LEVEL_1,
        //% block="等級2"
        LEVEL_2,
        //% block="等級3"
        LEVEL_3,
        //% block="等級4"
        LEVEL_4,
        //% block="等級5"
        LEVEL_5
    }
    export enum BaudRate {
        //% block="9600"
        BR_9600=0,
        //% block="19200"
        BR_19200,
        //% block="38400"
        BR_38400,
        //% block="57600"
        BR_57600,
        //% block="115200"
        BR_115200,
        //% block="230400"
        BR_230400,
        //% block="460800"
        BR_460800,
        //% block="921600"
        BR_921600
    }
    export enum WBMODE {
        //% block="自動"
        WB_AUTO,
        //% block="鎖定白平衡"
        WB_LOCK,
        //% block="白光模式"
        WB_WHITE,
        //% block="黃光模式"
        WB_WARM
    }
    export enum Params {
        //% block="橫向坐標"
        X_POS=1,
        //% block="縱向坐標"
        Y_POS,
        //% block="寬度"
        WIDTH,
        //% block="高度"
        HEIGHT,
        //% block="標籤"
        LABLE
    }
    export enum ColorParams {
        //% block="紅色通道"
        Red_channal=1,
        //% block="綠色通道"
        Green_channal,
        //% block="藍色通道"
        Blue_channal,
        //% block="標籤"
        LABLE
    }
    export enum DIR {
        //%blockId=DIR_X block="X"
        X = 0,
        //%blockId=DIR_Y block="Y"
        Y
    }

    export enum LEDS {
        //% block="1"
        LED1=0,
        //% block="2"
        LED2
    }

    export enum ENABLES {
        //% block="啟用"
        enable=1,
        //% block="關閉"
        disable=0
    }
    /**
     * Help goes here.
     */
    //% blockId=mu_init block="初始化%id|埠%port"
    //% weight=100 
    //% shim=muvs::begin
    //% group="设置模块"
    export function begin(id:SENSORS,port:PORT){
        return
    }
    //% blockId=MU_reset block="%id|恢復預設設置"
    //% weight=99
    //% shim=muvs::reset
    //% group="设置模块"
    export function reset(id:SENSORS) {
        return
    }
    
    //% blockId=MU_set_led block="%id|LED %led|識別到顏色 %detected_color|未識別到顏色 %undetected_color"
    //% level.defl=1 level.min=0 level.max=15
    //% weight=98 inlineInputMode=inline
    //% shim=muvs::set_led
    //% group="设置模块" advanced=true
    export function set_led(id:SENSORS,led:LEDS,detected_color:LED_COLOR_TYPE,undetected_color:LED_COLOR_TYPE) {
        return
    }
    
    //% blockId=MU_VisionBegin block="%id|%enable|演算法%type"
    //% weight=97
    //% shim=muvs::VisionBegin
    //% group="设置模块"
    export function VisionBegin(id:SENSORS,enable:ENABLES,type:VISION_TYPE) {
        return
    }
    //% blockId=MU_set_level block="%id|設置演算法%VISION_TYPE|性能%level"
    //% weight=96
    //% shim=muvs::set_level
    //% group="设置模块" advanced=true
    export function set_level(id:SENSORS,type:VISION_TYPE,level:VisionLevel) {
        return 
    }
    //% blockId=MU_set_zoom block="%id|數碼變焦%level"
    //% weight=95
    //% shim=muvs::set_zoom
    //% group="设置模块" advanced=true
    export function set_zoom(id:SENSORS,level:VisionZoom) {
        return 
    }
    
    //% blockId=MU_set_baudrate block="%id|設置序列埠鮑率%baudrate"
    //% weight=94
    //% shim=muvs::set_baudrate
    //% group="设置模块" advanced=true
    export function set_baudrate(id:SENSORS,baud:BaudRate) {
        return 
    }
    //% blockId=MU_set_awb block="%id|設置鏡頭白平衡%level"
    //% weight=93
    //% shim=muvs::set_WB
    //% group="设置模块" advanced=true
    export function set_WB(id:SENSORS,awb:WBMODE) {
        return 
    }
    //% block="%id|高幀率模式$on"
    //% shim=muvs::onOff
    //% on.shadow="toggleOnOff" group="设置模块" advanced=true
    export function onOff(id:SENSORS,on: boolean) {
        return 
    }
    //% block="%id|檢測到%type" color="#2E8B57"
    //% shim=muvs::detected
    //% group="运行模块"
    export function detected(id:SENSORS,type:VISION_TYPE):boolean{
        return true
    }
    //% block="%id|檢測到 顏色識別 x=%x|y=%y" color="#2E8B57"
    //% shim=muvs::MuVs2GetColorRCGLabel
    //% group="运行模块"
    export function MuVs2GetColorRCGLabel(id:SENSORS,x:number,y:number):boolean{
        return true
    }
    //% block="%id|檢測到 顏色識別 顏色=%color" color="#2E8B57"
    //% shim=muvs::MuVs2GetColorDetectLabel
    //% group="运行模块"
    export function MuVs2GetColorDetectLabel(id:SENSORS,label:COLOR_TYPE):boolean{
        return true
    }
    //% block="獲取%id|演算法%type|%item" color="#2E8B57"
    //% shim=muvs::get_value
    //% group="运行模块"
    export function get_value(id:SENSORS,type:_VISION_TYPE,item:Params):number{
        return 0
    }
    //% block="獲取%id|🌈 顏色識別|%item" color="#2E8B57"
    //% shim=muvs::get_color_value
    //% group="运行模块"
    export function get_color_value(id:SENSORS,item:ColorParams):number{
        return 0
    }
    //% block="獲取%id|演算法🔳 形狀卡片 =%type" color="#2E8B57"
    //% shim=muvs::get_shape_card_type
    //% group="运行模块"
    export function get_shape_card_type(id:SENSORS,type:SHAPE_CARD_TYPE):boolean{
        return true
    }
    //% block="獲取%id|演算法🔳 交通卡片 =%type" color="#2E8B57"
    //% shim=muvs::get_traffic_card_type
    //% group="运行模块"
    export function get_traffic_card_type(id:SENSORS,type:TRAFFIC_CARD_TYPE):boolean{
        return true
    }
    //% block="獲取%id|演算法🔳 數字卡片 =%type" color="#2E8B57"
    //% shim=muvs::get_number_card_type
    //% group="运行模块"
    export function get_number_card_type(id:SENSORS,type:NUM_CARD_TYPE):boolean{
        return true
    }
    //% block="獲取%id|演算法 顏色識別 顏色 =%color" color="#2E8B57"
    //% shim=muvs::get_color_recognize
    //% group="运行模块"
    export function get_color_recognize(id:SENSORS,color:COLOR_TYPE):boolean{
        return true
    }
}
