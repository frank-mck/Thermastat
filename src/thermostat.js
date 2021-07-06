'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  getCurrentTemperature() {
    return this.temperature;
  }
  up() {
    this.temperature += 1;
  }
  down() {
    if(this.isMINIMUMTemperature()) {
      return;
    }
    this.temperature -= 1;
  }
  isMINIMUMTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }
  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }
  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }
}