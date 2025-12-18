
"use strict";

let ServoJ = require('./ServoJ.js')
let BrakeControl = require('./BrakeControl.js')
let SetTool = require('./SetTool.js')
let PositiveKin = require('./PositiveKin.js')
let DIGroup = require('./DIGroup.js')
let VelJ = require('./VelJ.js')
let GetOutputBool = require('./GetOutputBool.js')
let ModbusRTUCreate = require('./ModbusRTUCreate.js')
let SetPostCollisionMode = require('./SetPostCollisionMode.js')
let ToolAI = require('./ToolAI.js')
let SetCoils = require('./SetCoils.js')
let GetDO = require('./GetDO.js')
let SetSafeWallEnable = require('./SetSafeWallEnable.js')
let GetInBits = require('./GetInBits.js')
let CalcTool = require('./CalcTool.js')
let ServoP = require('./ServoP.js')
let StopMoveJog = require('./StopMoveJog.js')
let Tool = require('./Tool.js')
let GetInputFloat = require('./GetInputFloat.js')
let ToolDOInstant = require('./ToolDOInstant.js')
let SetUser = require('./SetUser.js')
let ToolDO = require('./ToolDO.js')
let SetPayload = require('./SetPayload.js')
let SetSafeSkin = require('./SetSafeSkin.js')
let RelMovJUser = require('./RelMovJUser.js')
let Arc = require('./Arc.js')
let SetHoldRegs = require('./SetHoldRegs.js')
let DO = require('./DO.js')
let CP = require('./CP.js')
let RelJointMovJ = require('./RelJointMovJ.js')
let GetCoils = require('./GetCoils.js')
let ModbusClose = require('./ModbusClose.js')
let ModbusCreate = require('./ModbusCreate.js')
let EnableSafeSkin = require('./EnableSafeSkin.js')
let AOInstant = require('./AOInstant.js')
let StartDrag = require('./StartDrag.js')
let AI = require('./AI.js')
let SetOutputFloat = require('./SetOutputFloat.js')
let RelMovJTool = require('./RelMovJTool.js')
let GetErrorID = require('./GetErrorID.js')
let GetOutputInt = require('./GetOutputInt.js')
let Pause = require('./Pause.js')
let RunScript = require('./RunScript.js')
let RelMovLTool = require('./RelMovLTool.js')
let Continue = require('./Continue.js')
let TcpDashboard = require('./TcpDashboard.js')
let GetInputInt = require('./GetInputInt.js')
let SetTool485 = require('./SetTool485.js')
let RelMovLUser = require('./RelMovLUser.js')
let Circle = require('./Circle.js')
let ClearError = require('./ClearError.js')
let StopDrag = require('./StopDrag.js')
let DisableRobot = require('./DisableRobot.js')
let MovLIO = require('./MovLIO.js')
let SetToolPower = require('./SetToolPower.js')
let DOGroup = require('./DOGroup.js')
let SetBackDistance = require('./SetBackDistance.js')
let GetOutputFloat = require('./GetOutputFloat.js')
let AccL = require('./AccL.js')
let StartPath = require('./StartPath.js')
let GetInputBool = require('./GetInputBool.js')
let DI = require('./DI.js')
let DOInstant = require('./DOInstant.js')
let MovJIO = require('./MovJIO.js')
let GetPose = require('./GetPose.js')
let InverseSolution = require('./InverseSolution.js')
let InverseKin = require('./InverseKin.js')
let CalcUser = require('./CalcUser.js')
let DragSensivity = require('./DragSensivity.js')
let AO = require('./AO.js')
let MoveJog = require('./MoveJog.js')
let MovJ = require('./MovJ.js')
let User = require('./User.js')
let GetAngle = require('./GetAngle.js')
let SetCollisionLevel = require('./SetCollisionLevel.js')
let PowerOn = require('./PowerOn.js')
let GetStartPose = require('./GetStartPose.js')
let GetCurrentCommandId = require('./GetCurrentCommandId.js')
let VelL = require('./VelL.js')
let MovL = require('./MovL.js')
let SetOutputBool = require('./SetOutputBool.js')
let EmergencyStop = require('./EmergencyStop.js')
let Stop = require('./Stop.js')
let GetDOGroup = require('./GetDOGroup.js')
let AccJ = require('./AccJ.js')
let EnableRobot = require('./EnableRobot.js')
let SetOutputInt = require('./SetOutputInt.js')
let SpeedFactor = require('./SpeedFactor.js')
let ToolDI = require('./ToolDI.js')
let GetAO = require('./GetAO.js')
let SetToolMode = require('./SetToolMode.js')
let GetInRegs = require('./GetInRegs.js')
let GetHoldRegs = require('./GetHoldRegs.js')
let RobotMode = require('./RobotMode.js')

module.exports = {
  ServoJ: ServoJ,
  BrakeControl: BrakeControl,
  SetTool: SetTool,
  PositiveKin: PositiveKin,
  DIGroup: DIGroup,
  VelJ: VelJ,
  GetOutputBool: GetOutputBool,
  ModbusRTUCreate: ModbusRTUCreate,
  SetPostCollisionMode: SetPostCollisionMode,
  ToolAI: ToolAI,
  SetCoils: SetCoils,
  GetDO: GetDO,
  SetSafeWallEnable: SetSafeWallEnable,
  GetInBits: GetInBits,
  CalcTool: CalcTool,
  ServoP: ServoP,
  StopMoveJog: StopMoveJog,
  Tool: Tool,
  GetInputFloat: GetInputFloat,
  ToolDOInstant: ToolDOInstant,
  SetUser: SetUser,
  ToolDO: ToolDO,
  SetPayload: SetPayload,
  SetSafeSkin: SetSafeSkin,
  RelMovJUser: RelMovJUser,
  Arc: Arc,
  SetHoldRegs: SetHoldRegs,
  DO: DO,
  CP: CP,
  RelJointMovJ: RelJointMovJ,
  GetCoils: GetCoils,
  ModbusClose: ModbusClose,
  ModbusCreate: ModbusCreate,
  EnableSafeSkin: EnableSafeSkin,
  AOInstant: AOInstant,
  StartDrag: StartDrag,
  AI: AI,
  SetOutputFloat: SetOutputFloat,
  RelMovJTool: RelMovJTool,
  GetErrorID: GetErrorID,
  GetOutputInt: GetOutputInt,
  Pause: Pause,
  RunScript: RunScript,
  RelMovLTool: RelMovLTool,
  Continue: Continue,
  TcpDashboard: TcpDashboard,
  GetInputInt: GetInputInt,
  SetTool485: SetTool485,
  RelMovLUser: RelMovLUser,
  Circle: Circle,
  ClearError: ClearError,
  StopDrag: StopDrag,
  DisableRobot: DisableRobot,
  MovLIO: MovLIO,
  SetToolPower: SetToolPower,
  DOGroup: DOGroup,
  SetBackDistance: SetBackDistance,
  GetOutputFloat: GetOutputFloat,
  AccL: AccL,
  StartPath: StartPath,
  GetInputBool: GetInputBool,
  DI: DI,
  DOInstant: DOInstant,
  MovJIO: MovJIO,
  GetPose: GetPose,
  InverseSolution: InverseSolution,
  InverseKin: InverseKin,
  CalcUser: CalcUser,
  DragSensivity: DragSensivity,
  AO: AO,
  MoveJog: MoveJog,
  MovJ: MovJ,
  User: User,
  GetAngle: GetAngle,
  SetCollisionLevel: SetCollisionLevel,
  PowerOn: PowerOn,
  GetStartPose: GetStartPose,
  GetCurrentCommandId: GetCurrentCommandId,
  VelL: VelL,
  MovL: MovL,
  SetOutputBool: SetOutputBool,
  EmergencyStop: EmergencyStop,
  Stop: Stop,
  GetDOGroup: GetDOGroup,
  AccJ: AccJ,
  EnableRobot: EnableRobot,
  SetOutputInt: SetOutputInt,
  SpeedFactor: SpeedFactor,
  ToolDI: ToolDI,
  GetAO: GetAO,
  SetToolMode: SetToolMode,
  GetInRegs: GetInRegs,
  GetHoldRegs: GetHoldRegs,
  RobotMode: RobotMode,
};
