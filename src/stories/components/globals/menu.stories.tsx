import type { StoryObj, Meta } from "@storybook/react";
import { Menu } from "../../../components/globals/Menu";
import { mdiAirplane, mdiControllerClassic, mdiHome, mdiPackage } from "@mdi/js";

const meta = {
    title: 'Globals/Menu',
    component: Menu,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
      items: [
        {key: '/games', label: 'games', icon: mdiControllerClassic},
        {key: '/packages', label: 'packages', icon: mdiPackage},
        {key: '/airplanes', label: 'airplanes', icon: mdiAirplane}
      ],
      logoUrl: '/statics/logo-dark.png',
      location: {pathname: '/'},
      menuOpened: true,
      navigate: ()=>{},
      onClose: ()=>{}
    },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
export const OtherSelected: Story = {
  args: {
    location: {pathname: '/airplanes/123'},
  }
};