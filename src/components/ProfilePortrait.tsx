import Image from "next/image";
import { Button, Column } from "@once-ui-system/core";
import { person } from "@/resources";
import styles from "./ProfilePortrait.module.scss";

type ProfilePortraitProps = {
  variant: "home" | "about";
};

export function ProfilePortrait({ variant }: ProfilePortraitProps) {
  return (
    <Column className={styles.profile} gap="m" horizontal="center">
      <Image
        className={`${styles.portrait} ${styles[variant]}`}
        src={person.avatar}
        alt={`${person.name} portrait`}
        width={240}
        height={240}
        priority={variant === "home"}
      />
      <Button
        href={person.cv.href}
        download={person.cv.filename}
        prefixIcon="download"
        variant="secondary"
        size="m"
      >
        Download My CV
      </Button>
    </Column>
  );
}
