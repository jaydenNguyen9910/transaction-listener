import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import { LogMessage } from "../generated/SimpleLogger/SimpleLogger"

export function createLogMessageEvent(message: string): LogMessage {
  let logMessageEvent = changetype<LogMessage>(newMockEvent())

  logMessageEvent.parameters = new Array()

  logMessageEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )

  return logMessageEvent
}
