import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { Group, Text, Anchor, ActionIcon } from "@mantine/core";

function Header() {
  return (
    <div>
      {/* Header Title */}
      <Group spacing="xs" mb="xs">
        <Text weight={700} size="lg">
          Purchase And Store
        </Text>
        <FaAngleRight size={20} />
        <Text weight={700} size="lg">
          Inbox
        </Text>
      </Group>

      {/* Navigation Links */}
      <Group spacing="xs" align="center">
        {/* Left Navigation Icon */}
        <ActionIcon size="lg" color="dark">
          <AiOutlineLeftCircle size={20} />
        </ActionIcon>

        {/* NavLink Group */}
        <Group spacing="xs" position="center">
          <Anchor component={NavLink} to="/file-an-indent" size="md">
            File An Indent
          </Anchor>
          <Text>|</Text>
          <Anchor component={NavLink} to="/all-filed-indents" size="md">
            All Filed Indents
          </Anchor>
          <Text>|</Text>
          <Anchor component={NavLink} to="/saved-indents" size="md">
            Saved Indents
          </Anchor>
          <Text>|</Text>
          <Anchor component={NavLink} to="/inbox" size="md">
            Inbox
          </Anchor>
          <Text>|</Text>
          <Anchor component={NavLink} to="/outbox" size="md">
            Outbox
          </Anchor>
          <Text>|</Text>
          <Anchor component={NavLink} to="/archived-indents" size="md">
            Archived Indents
          </Anchor>
        </Group>

        {/* Right Navigation Icon */}
        <ActionIcon size="lg" color="dark">
          <AiOutlineRightCircle size={20} />
        </ActionIcon>
      </Group>
    </div>
  );
}

export default Header;
