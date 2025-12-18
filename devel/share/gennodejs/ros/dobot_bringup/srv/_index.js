
"use strict";

let ServoJ = require('./ServoJ.js')
let StopmoveJog = require('./StopmoveJog.js')
let BrakeControl = require('./BrakeControl.js')
let AOExecute = require('./AOExecute.js')
let Arch = require('./Arch.js')
let DIGroup = require('./DIGroup.js')
let SpeedL = require('./SpeedL.js')
let HandleTrajPoints = require('./HandleTrajPoints.js')
let SetTerminal485 = require('./SetTerminal485.js')
let SetTerminalKeys = require('./SetTerminalKeys.js')
let Jump = require('./Jump.js')
let ToolAI = require('./ToolAI.js')
let SetCoils = require('./SetCoils.js')
let StartTrace = require('./StartTrace.js')
let RelMovJ = require('./RelMovJ.js')
let GetInBits = require('./GetInBits.js')
let ServoP = require('./ServoP.js')
let Tool = require('./Tool.js')
let ToolDO = require('./ToolDO.js')
let GetPathStartPose = require('./GetPathStartPose.js')
let SetPayload = require('./SetPayload.js')
let ContinueScript = require('./ContinueScript.js')
let TCPSpeed = require('./TCPSpeed.js')
let SetSafeSkin = require('./SetSafeSkin.js')
let Sync = require('./Sync.js')
let StartFCTrace = require('./StartFCTrace.js')
let RelMovJUser = require('./RelMovJUser.js')
let Arc = require('./Arc.js')
let SetHoldRegs = require('./SetHoldRegs.js')
let DO = require('./DO.js')
let CP = require('./CP.js')
let RelJointMovJ = require('./RelJointMovJ.js')
let GetCoils = require('./GetCoils.js')
let SetObstacleAvoid = require('./SetObstacleAvoid.js')
let ModbusClose = require('./ModbusClose.js')
let ModbusCreate = require('./ModbusCreate.js')
let StartDrag = require('./StartDrag.js')
let AI = require('./AI.js')
let RelMovJTool = require('./RelMovJTool.js')
let GetErrorID = require('./GetErrorID.js')
let LimZ = require('./LimZ.js')
let RunScript = require('./RunScript.js')
let ToolDOExecute = require('./ToolDOExecute.js')
let RelMovLTool = require('./RelMovLTool.js')
let MovJExt = require('./MovJExt.js')
let TcpDashboard = require('./TcpDashboard.js')
let RelMovLUser = require('./RelMovLUser.js')
let Continues = require('./Continues.js')
let Circle = require('./Circle.js')
let DigitalOutputs = require('./DigitalOutputs.js')
let ClearError = require('./ClearError.js')
let StopDrag = require('./StopDrag.js')
let SpeedJ = require('./SpeedJ.js')
let ServoJParam = require('./ServoJParam.js')
let pause = require('./pause.js')
let DisableRobot = require('./DisableRobot.js')
let MovLIO = require('./MovLIO.js')
let StopScript = require('./StopScript.js')
let DOGroup = require('./DOGroup.js')
let Wait = require('./Wait.js')
let GetSixForceData = require('./GetSixForceData.js')
let AccL = require('./AccL.js')
let SyncAll = require('./SyncAll.js')
let StartPath = require('./StartPath.js')
let DI = require('./DI.js')
let TCPSpeedEnd = require('./TCPSpeedEnd.js')
let MovJIO = require('./MovJIO.js')
let GetPose = require('./GetPose.js')
let InverseSolution = require('./InverseSolution.js')
let JointMovJ = require('./JointMovJ.js')
let TcpRealData = require('./TcpRealData.js')
let SetArmOrientation = require('./SetArmOrientation.js')
let RelMovL = require('./RelMovL.js')
let AO = require('./AO.js')
let MoveJog = require('./MoveJog.js')
let MovJ = require('./MovJ.js')
let SetCollideDrag = require('./SetCollideDrag.js')
let User = require('./User.js')
let GetAngle = require('./GetAngle.js')
let SetCollisionLevel = require('./SetCollisionLevel.js')
let PowerOn = require('./PowerOn.js')
let PauseScript = require('./PauseScript.js')
let MovL = require('./MovL.js')
let EmergencyStop = require('./EmergencyStop.js')
let PayLoad = require('./PayLoad.js')
let PositiveSolution = require('./PositiveSolution.js')
let AccJ = require('./AccJ.js')
let EnableRobot = require('./EnableRobot.js')
let GetTerminal485 = require('./GetTerminal485.js')
let SpeedFactor = require('./SpeedFactor.js')
let ToolDI = require('./ToolDI.js')
let GetTraceStartPose = require('./GetTraceStartPose.js')
let GetInRegs = require('./GetInRegs.js')
let DOExecute = require('./DOExecute.js')
let LoadSwitch = require('./LoadSwitch.js')
let ResetRobot = require('./ResetRobot.js')
let GetHoldRegs = require('./GetHoldRegs.js')
let RobotMode = require('./RobotMode.js')

module.exports = {
  ServoJ: ServoJ,
  StopmoveJog: StopmoveJog,
  BrakeControl: BrakeControl,
  AOExecute: AOExecute,
  Arch: Arch,
  DIGroup: DIGroup,
  SpeedL: SpeedL,
  HandleTrajPoints: HandleTrajPoints,
  SetTerminal485: SetTerminal485,
  SetTerminalKeys: SetTerminalKeys,
  Jump: Jump,
  ToolAI: ToolAI,
  SetCoils: SetCoils,
  StartTrace: StartTrace,
  RelMovJ: RelMovJ,
  GetInBits: GetInBits,
  ServoP: ServoP,
  Tool: Tool,
  ToolDO: ToolDO,
  GetPathStartPose: GetPathStartPose,
  SetPayload: SetPayload,
  ContinueScript: ContinueScript,
  TCPSpeed: TCPSpeed,
  SetSafeSkin: SetSafeSkin,
  Sync: Sync,
  StartFCTrace: StartFCTrace,
  RelMovJUser: RelMovJUser,
  Arc: Arc,
  SetHoldRegs: SetHoldRegs,
  DO: DO,
  CP: CP,
  RelJointMovJ: RelJointMovJ,
  GetCoils: GetCoils,
  SetObstacleAvoid: SetObstacleAvoid,
  ModbusClose: ModbusClose,
  ModbusCreate: ModbusCreate,
  StartDrag: StartDrag,
  AI: AI,
  RelMovJTool: RelMovJTool,
  GetErrorID: GetErrorID,
  LimZ: LimZ,
  RunScript: RunScript,
  ToolDOExecute: ToolDOExecute,
  RelMovLTool: RelMovLTool,
  MovJExt: MovJExt,
  TcpDashboard: TcpDashboard,
  RelMovLUser: RelMovLUser,
  Continues: Continues,
  Circle: Circle,
  DigitalOutputs: DigitalOutputs,
  ClearError: ClearError,
  StopDrag: StopDrag,
  SpeedJ: SpeedJ,
  ServoJParam: ServoJParam,
  pause: pause,
  DisableRobot: DisableRobot,
  MovLIO: MovLIO,
  StopScript: StopScript,
  DOGroup: DOGroup,
  Wait: Wait,
  GetSixForceData: GetSixForceData,
  AccL: AccL,
  SyncAll: SyncAll,
  StartPath: StartPath,
  DI: DI,
  TCPSpeedEnd: TCPSpeedEnd,
  MovJIO: MovJIO,
  GetPose: GetPose,
  InverseSolution: InverseSolution,
  JointMovJ: JointMovJ,
  TcpRealData: TcpRealData,
  SetArmOrientation: SetArmOrientation,
  RelMovL: RelMovL,
  AO: AO,
  MoveJog: MoveJog,
  MovJ: MovJ,
  SetCollideDrag: SetCollideDrag,
  User: User,
  GetAngle: GetAngle,
  SetCollisionLevel: SetCollisionLevel,
  PowerOn: PowerOn,
  PauseScript: PauseScript,
  MovL: MovL,
  EmergencyStop: EmergencyStop,
  PayLoad: PayLoad,
  PositiveSolution: PositiveSolution,
  AccJ: AccJ,
  EnableRobot: EnableRobot,
  GetTerminal485: GetTerminal485,
  SpeedFactor: SpeedFactor,
  ToolDI: ToolDI,
  GetTraceStartPose: GetTraceStartPose,
  GetInRegs: GetInRegs,
  DOExecute: DOExecute,
  LoadSwitch: LoadSwitch,
  ResetRobot: ResetRobot,
  GetHoldRegs: GetHoldRegs,
  RobotMode: RobotMode,
};
