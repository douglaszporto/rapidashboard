import type { StoryObj, Meta } from "@storybook/react";
import { SimpleTopbar } from "../../../src/components/globals/SimpleTopbar";

const meta = {
    title: 'Globals/SimpleTopbar',
    component: SimpleTopbar,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
      items: [
        {action: ()=>{}, label:"Item 1"},
        {action: ()=>{}, label:"Item 2"},
        {action: ()=>{}, label:"Item 3"}
      ],
      userName: "User Name",
      onMenuOpen: ()=>{}
    },
} satisfies Meta<typeof SimpleTopbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
export const WithPhoto: Story = {
  args: {
    photo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA51JREFUaEPdms9LMkEYx58FSaVDkAehwIMEHbx5Lc957tJBj4JgKXhNgkw8B2JKQaco8OAf0F1vEnQUwlP+OGjQIarTvjzzMr6z2/6Y3Z0xffeS48w+8/3M82O2dZRer6dubm6C3+8HWZeiKLJMw9fXF7y9vYEyGAxU/LCzswMbGxvSJpRh+P39HV5eXgAdoQyHQ3V9fZ18sUowFAI1f3x8/AXZ2toCtmPZPaPXOhqN/oGg61cBxkjjD5BlhzFbaEOQZYWxihZTkGWDsQt5S5BlgbGDQJ22IL8NwwPBDfJbMLwQjkAWDeMEwjHIomCcQrgCkQ3jBsI1iCwYtxCeQETDeIHwDCIKxisE6hiPx9qHRjf/M3gR4uVeVqsQELeeEQUhJLTYVXEizMlYnijhekThMUTH8AjkGeNkTuEe4YGRASENxCxnZEEIq1pmYcAKxzEyX24Iq1p2MNgv8w2N8GTXA1GvrDTIIkNLmkeMEltmsksBsRIsC0Y4CI9QnjG/uiE6EehkLA+UMI+4EebmHjMoISBeBHm5l4XyDCJCiAgbnkBECOB50JSaIyIhRMC48ogMCK8wjkFkQniBcQTCQqytrUGxWITr6+t5CF9cXMDZ2Rlp9/t9ODo6gufnZ8hms3B5eQnBYNAy3D8/P3/YPD09hWq1amuTG0TvidlsBicnJ3B+fg67u7sagVRQIpGAw8NDIg4/p1IpSxC9TaOFM7PJBWIUTrjiCFGv1yEUCmkEYl+hUIBarUYgu90u3N3d2XrFyCadW1VVKJVKpjZtQcxywkoc9lUqFbi/vyeQbLvRaJA223d8fAytVgum06khMGpot9vw8PBAxultYtv1T28oJJ1Ozz1xcHCgEcd6QL/SCIlXLpcj4YZ5tbe3R+43s/n4+Ag3NzeACxEOh0kOshHh+sdQFDMcDufhwrafnp40K6ufFHMBAVAcWyDsbN7e3kImk4FYLAaTycQexE2JZfMCQ8QstGg+4eqj12iIGVUBI5vNZpOcO8E5sBLS+4UdGGBXHSdh3a7PJyoQxe/v789Lth7GzKbP5yM50+l04OrqipR1DQivJ9jyiiFC29vb20SUVfll+5LJ5DxH4vG4pkzb2cQCEY1GIZ/Pk4NAcxCnh2r0m5d+0zPaEHHFcU/Bi26Q6C1atSKRiGZDtLNZLpfh9fWVvGYih2r+m2NO9OBZIBDQhCluQnhgjP6lnVbf0zHsQTMcL/P6/v4mBeAPAs37tyGbP0cAAAAASUVORK5CYII=",
  }
};