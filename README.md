# Transclusion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## USEFUL LINKS

https://docs.google.com/presentation/d/1hmfqNrJA4r2IF-dQE2YSAkOfw62i3nqfSzSc_m9uxBs/edit?usp=drivesdk

[MDN DOCS slot ref](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)

`The <ng-content> element is neither a component nor DOM element. Instead, it is a special placeholder that tells Angular where to render content. Angular's compiler processes all <ng-content> elements at build-time. You cannot insert, remove, or modify <ng-content> at run time. You cannot add directives, styles, or arbitrary attributes to <ng-content>.`

## Single Slot Content Projection

In this type, we have a Child-Component and a Parent-Component

- Child Component
  ```
  <div>
      <ng-content></ng-content>
  </div>
  ```
- Parent Component
  ```
  <app-weather-widget>
    <p>Hello there</p>
  </app-weather-widget>
  ```
  We basically provide the markup we want projected into our Child-Component.

We also have to take note that angular will project content to the last slot provided that no `select` attribute is provided. In the example below, all the markup content provided in the Parent-Component will be projected to the last slot.

- Child Component

  ```
  <div>
      <h1>Header</h1>
      <ng-content></ng-content>
      <br>

      <h2>Footer</h2>
      <ng-content></ng-content>
  </div>
  ```

- Parent Component
  ```
  <app-weather-widget>
      <p>Hello there</p>
      <p>Hello there then</p>
  </app-weather-widget>
  ```

## Multi Slot Content Projection

Taking our example directly above, we can specify exactly where we want to project our content. By utilizing the `select` attribute, we can input various inputs like:

1. CSS Selectors - Given the markup defined in the Parent-Component has a class name of `firstContainer`, in our Child-Component we give our `ng-content` a `select` attribute of `.firstContainer`

   - Child Component

     ```
     <div>
         <h1>Header</h1>
         <ng-content select=".firstContainer"></ng-content>
         <br>

         <h2>Footer</h2>
         <ng-content></ng-content>
     </div>
     ```

   - Parent Component

     ```
     <app-weather-widget>
        <p class="firstContainer">Hello there</p>
        <p>Hello there then</p>
     </app-weather-widget>
     ```

     We can also provide multiple CSS selectors in a situation where we want multiple markups to be projected in a specific slot. We just separate our different selectors using a `comma`.

   - Child Component

     ```
     <div>
         <h1>Header</h1>
         <ng-content select=".firstContainer, .secondContainer"></ng-content>
         <br>

         <h2>Footer</h2>
         <ng-content></ng-content>
     </div>
     ```

   - Parent Component

     ```
     <app-weather-widget>
         <p class="firstContainer">Hello there</p>
         <p class="secondContainer">Hello there again</p>

         <p>Hello there then</p>
     </app-weather-widget>
     ```

2. Directives - Given the markup defined in the Parent-Component has a attribute of `headerGreeting`, in our Child-Component we give our `ng-content` a `select` attribute of `[headerGreeting]`. If we wanted to project multiple markup defined with different attributes on the parent component, we simply use `[headerGreeting], [headerGreetingAlt]`

   - Child Component

     ```
     <div>
         <h1>Header</h1>
         <ng-content select="[headerGreeting]"></ng-content>

         <!-- If we have multiple attributes to project -->
         <!-- <ng-content select="[headerGreeting], [headerGreetingAlt]"></ng-content> -->
         <br>

         <h2>Footer</h2>
         <ng-content></ng-content>
     </div>
     ```

   - Parent Component
     ```
     <app-weather-widget>
         <p headerGreeting>Hello there</p>
         <p headerGreetingAlt>Hello there again</p>
         <p>Hello there then</p>
     </app-weather-widget>
     ```

3. Custom Attributes - Given the markup defined in the Parent-Component has an attribute name of `slotContent` and a value of `headerGreetingAltTwo`, in our Child-Component we give our `ng-content` a `select` attribute of `[slotContent='headerGreetingAltTwo']`

   - Child Component

     ```
     <div>
         <h1>Header</h1>
         <ng-content select="[slotContent='headerGreetingAltTwo']"></ng-content>

         <!-- If we have multiple attributes to project -->
         <!--   <ng-content select="[slotContent='headerGreetingAltTwo'], [slotContent='headerGreetingAlt']"></ng-content> -->
         <br>

         <h2>Footer</h2>
         <ng-content></ng-content>
     </div>
     ```

   - Parent Component
     ```
     <app-weather-widget>
         <p slotContent="headerGreetingAltTwo">Hello there</p>
         <p>Hello there then</p>
     </app-weather-widget>
     ```

4. ngProjectAs - Also defined as `Aliasing`, is a special attribute that notifies Angular to ignore the default content resolution algorithm. Whenever an element with ngProjectAs is checked against an <ng-content> placeholder, Angular compares against the ngProjectAs value instead of the element's identity. `ngProjectAs` supports only static values and cannot be bound to dynamic expressions.

   - Child Component

     ```
     <div>
        <h1>Header</h1>
        <ng-content select="['headerSlot']"></ng-content>

        <!-- If we have multiple attributes to project -->
        <!--   <ng-content select="['headerSlot', 'headerSlotTwo']"></ng-content> -->
        <br />

        <h2>Footer</h2>
        <ng-content></ng-content>
     </div>
     ```

   - Parent Component
     ```
     <app-weather-widget>
        <p ngProjectAs="headerSlot">Hello there</p>
        <p>Hello there then</p>
     </app-weather-widget>
     ```

## Content Reprojection

We may have a situation where we have 3 levels of projection:
-Parent component
-Child component
-Sub Child component
**ngProjectAs** is used to re-project content to the child component.

- Sub Child Component

        ```
        <div>
            <ng-content select="['buttonIcon']"></ng-content>
            <hr>
            <ng-content select="['buttonText']"></ng-content>
        </div>
        ```

- Child component

        ```
        <div>
            <h1>Header</h1>
            <ng-content select="['headerSlot']"></ng-content>
            <app-button-widget>
                <ng-content ngProjectAs="buttonText" select="['btnText']"></ng-content>
                <ng-content ngProjectAs="buttonIcon" select="['btnIcon']"></ng-content>
            </app-button-widget>
            <br />
            <h2>Footer</h2>
            <ng-content></ng-content>
        </div>
        ```

- Parent Component

        ```
        <app-weather-widget>
            <p ngProjectAs="headerSlot">Hello there</p>
            <p ngProjectAs="btnText">Ola!</p>
            <p ngProjectAs="btnIcon">😊</p>
            <p>Hello there then</p>
        </app-weather-widget>
        ```
