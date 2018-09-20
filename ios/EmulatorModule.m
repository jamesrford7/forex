//
//  EmulatorModule.m
//  forex
//
//  Created by James Ford on 20/09/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "EmulatorModule.h"
#import <React/RCTLog.h>

@implementation EmulatorModule

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(getEmulatorStatus,
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    #if TARGET_IPHONE_SIMULATOR
      resolve(@"You are running on an iOS emulator");
    #else
      resolve(@"You are running on a real iOS device");
    #endif
}

@end
