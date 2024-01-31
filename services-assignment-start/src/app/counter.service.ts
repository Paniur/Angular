export class CounterService
{
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    ActiveToInactive()
    {
        this.activeToInactiveCounter++;
    }
    InactiveToActive()
    {
        this.inactiveToActiveCounter++;
    }
}