enum TrafficLight {
    Red = "Red",
    Yellow = "Yellow",
    Green = "Green"
  }
  
  class TrafficLightRobot {
    currentLight: TrafficLight;
  
    constructor() {
      this.currentLight = TrafficLight.Red;
    }
  
    changeLight() {
      switch (this.currentLight) {
        case TrafficLight.Red:
          this.currentLight = TrafficLight.Green;
          break;
        case TrafficLight.Yellow:
          this.currentLight = TrafficLight.Red;
          break;
        case TrafficLight.Green:
          this.currentLight = TrafficLight.Yellow;
          break;
      }
      console.log(`The traffic light is now ${this.currentLight}`);
    }
  
    start() {
      console.log(`Starting the traffic light robot...`);
      console.log(`The traffic light is now ${this.currentLight}`);
      setInterval(() => this.changeLight(), 10000);
    }
  }
  
  const robot = new TrafficLightRobot();
  robot.start();
  