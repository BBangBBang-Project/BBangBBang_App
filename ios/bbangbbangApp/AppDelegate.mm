#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import "RNSplashScreen.h"
#import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSString *apiKey = [self googleMapsApiKey];
      [GMSServices provideAPIKey:apiKey];
  self.moduleName = @"bbangbbangApp";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

[super application:application didFinishLaunchingWithOptions:launchOptions];
  [RNSplashScreen show];
  return YES;
}
- (NSString *)googleMapsApiKey {
    NSString *path = [[NSBundle mainBundle] pathForResource:@"MapInfo" ofType:@"plist"];
    NSDictionary *config = [NSDictionary dictionaryWithContentsOfFile:path];
    NSString *apiKey = [config objectForKey:@"GoogleMapsAPIKey"];
    if (!apiKey) {
        NSLog(@"API key is not set or Config.plist is missing");
        return @"";
    }
    return apiKey;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
