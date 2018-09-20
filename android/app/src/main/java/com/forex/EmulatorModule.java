package com.forex;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class EmulatorModule extends ReactContextBaseJavaModule {

    public EmulatorModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "EmulatorModule";
    }

    @ReactMethod
    public void getEmulatorStatus(Promise promise) {
        promise.resolve("You are running on an emulator");
    }
}