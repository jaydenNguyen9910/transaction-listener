import { LogMessage as LogMessageEvent } from "../generated/SimpleLogger/SimpleLogger"
import { LogMessage } from "../generated/schema"

export function handleLogMessage(event: LogMessageEvent): void {
  // console.log("__________________________________RECEIVING__________________________________")
  // let entity = new LogMessage(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.message = event.params.message

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()

  // let startTime = Date.now();
  // while (Date.now() - startTime < 5000) {
  //   // Busy wait for 5000 milliseconds (5 seconds)
  // }
}
