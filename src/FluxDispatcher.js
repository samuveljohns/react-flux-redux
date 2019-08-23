import {
  Dispatcher
} from "flux";

class FluxDispatcher extends Dispatcher {
  dispatch(payload) {
    if (payload == null) {
      throw new Error("FluxDispatcher.dispatch: no payl-oad was given");
    }

    console.log("UI event dispatched", payload);

    try {
      super.dispatch(payload);
    } catch (e) {
      console.error("Error during dispatch", e);
    }
  }
}

export default new FluxDispatcher();