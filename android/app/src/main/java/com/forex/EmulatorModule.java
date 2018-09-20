package com.forex;

import android.os.Build;

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
        if (Build.FINGERPRINT.contains("generic")) {
                promise.resolve("You are running on an emulator");
        }
        else {
            promise.resolve("You are running on a real device");
        }
    }
}