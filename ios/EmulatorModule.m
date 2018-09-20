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
    resolve(@"IOS Emulator");
}

@end
