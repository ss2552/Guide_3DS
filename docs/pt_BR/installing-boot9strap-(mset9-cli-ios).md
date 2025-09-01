# Installing boot9strap (MSET9 CLI iOS)

:::details Detalhes Técnicos (opcional)

[MSET9](https://github.com/zoogie/MSET9) é um exploit para o aplicativo de Configurações do Sistema desenvolvido por [zoogie](https://github.com/zoogie). Ele faz uso de uma falha onde a ID1 (a pasta de 32 caracteres dentro da pasta Nintendo 3DS, dentro da ID0) pode ter _qualquer_ nome desde que seja composto por 32 caracteres. Performing a specific sequence of actions results in the console executing the instructions that are encoded into the ID1 folder name, which can be used to grant full control over the 3DS.

:::

## Notas de Compatibilidade

::: warning

This page requires an iPhone or iPad running iOS/iPadOS 14.0 or higher. Se você tiver um computador executando Windows, macOS ou Linux, siga [Instalando boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\)) em vez disso. Se você tem um celular/tablet Android ou um Chromebook, siga [Instalando boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)) em vez disso. Se você não tiver acesso a nenhum desses dispositivos, será necessário usar um [método alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

::: warning

As iPhones and iPads do not have an SD card slot, you will need an adapter to plug in your SD card to your device (e.g. a Lightning to SD card or USB-C to SD card adapter).

:::

## O que é necessário

- [iSH](https://apps.apple.com/us/app/ish-shell/id1436902243) from App Store

## Instruções

::: info

Nesta página, você usará o script MSET9, que é usado para acionar o MSET9. Enquanto o script estiver em progresso, os dados do usuário desaparecerão temporariamente, mas retornarão após a conclusão desta página. Se você receber um erro ao executar o script, a solução para esse erro provavelmente pode ser encontrada na página de [troubleshooting](troubleshooting-mset9).

:::

### Seção I - Preparação

In this section, you will prepare the MSET9 exploit by **temporarily** creating a new HOME Menu profile with no user data, and then setting up that profile with only the minimum data required for MSET9 to trigger. Seus dados de usuário existentes desaparecerão, mas voltarão quando você terminar esta página.

1. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

    ```
    ::: info
    
    ![](/images/screenshots/mset9/mset9-ish-select.png)
    
    :::
    ```

1. Type the number corresponding to your console model and version, then tap Return

   - The screen should change to this:

   ::: info

   ![](/images/screenshots/mset9/mset9-ish-setup-notcreated.png)

   :::

   - Certifique-se de que o modelo e a versão mostrados estão corretos
2. Type `1`, then tap Return to begin the process of creating the MSET9 ID1
3. After reviewing the disclaimer, type `1` again and tap Return to accept it
   - Se você receber um erro, verifique o [guia de troubleshooting](troubleshooting-mset9), depois tente novamente
4. If you see the message "Created hacked ID1.", tap Return to close the MSET9 script
   - Your 3DS will appear to have no data / no user-installed apps on HOME Menu. **Isto é esperado.** Seus dados voltarão mais tarde
5. Reinsira o cartão SD no seu console
6. Ligue o seu console
7. Abra o Mii Maker
8. Espere o seu console chegar a tela de [Bem-vindo do Mii Maker](/images/screenshots/mset9/mii-welcome.png), depois saia do Mii Maker e retorne ao Menu HOME
   - Você verá [esta tela](/images/screenshots/mset9/mii-extdata.png), o que indica que os dados necessários foram criados
   - Se você apenas chegar à [tela normal](/images/screenshots/mset9/mii-existing.png) do Mii Maker, então os dados já existem. Saia do Mi Maker e volte para o Menu HOME
9. Inicie as Configurações do Sistema e navegue para `Gerenciador de Dados` -> `Nintendo 3DS` -> `Software` -> Apagar ([imagem](/images/screenshots/database-reset.jpg))
   - Isso não irá apagar nenhum dos seus dados
10. Desligue seu console apertando o botão POWER e depois toque em Desligar na tela inferior
11. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

1. Type the number corresponding to your console model and version, then tap Return

   - The screen should change to this and display `Ready`:

   ::: info

   ![](/images/screenshots/mset9/mset9-ish-ready.png)

   :::

   - If the screen says [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-ish-not-ready.png):
     - Type `2`, then tap Return to check the MSET9 status and follow the directions indicated
     - Assim que você resolver o problema, volte à Seção I Passo 14
     - Para mais informações, verifique a página de [troubleshooting](troubleshooting-mset9)
2. Type `0`, then tap Return to close the script
3. Reinsira o cartão SD no seu console

### Seção II - MSET9

Nestã seção, você vai attivar o MSET9 para iniciar o SafeB9SInstaller (o instalador de custom firmware).

::: danger

Estas instruções devem ser seguidas **EXATAMENTE** como estão, então confira TUDO que você está fazendo para evitar erros!

:::

1. Ligue seu console, garantindo que a Configuração do Console esteja selecionada
   - Se a Configuração do Console não está selecionada, **[posicione o cursor](/images/screenshots/mset9/hover-settings.png)** sob o ícone da Configuração do Console usando o D-Pad, desligue seu console e ligue-o novamente
2. Pressione (A) para abrir a Configuração do Console
3. Navegue para `Gerenciamento de Dados` -> `Nintendo 3DS` -> `Dados adicionais` ([imagem](/images/screenshots/mset9/settings-extdata.png))
4. **Não pressione nenhum botão ou toque na tela**
5. **Com o console AINDA LIGADO, e sem pressionar nenhum botão ou tocar na tela**, remova seu cartão SD do seu console
   - The menu will refresh and say that no SD card is inserted
6. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

1. Type the number corresponding to your console model and version, then tap Return
2. In the MSET9 screen, type `3`, then tap Return to inject MSET9
   - Você deve ver "MSET9 successfully injected!"
3. Tap Return to close the MSET9 script
4. Reinsira o cartão SD no seu console **sem pressionar nenhum botão ou tocar na tela**
5. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
   - If you get a red screen or the console gets stuck on a loading screen for more than 10 seconds, follow the [troubleshooting guide](troubleshooting-mset9)

### Seção III - Instalando boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-mset9#sighaxed-firm-was-not-installed-check-lower-screen-for-more-info)
   - If the top screen is blank **and** you see "Crypto Status - all checks passed" on the bottom screen, you will have to enter key combo blindly. Press the following buttons on your console in this order:
     - D-Pad Left, D-Pad Down, D-Pad Right, D-Pad Up, A
2. Once it is complete (all seven steps on the bottom screen are green), press (A) to reboot your console

<!--@include: ./_include/configure-luma3ds.md -->

### Seção IV - Removendo o MSET9

Nesta seção, você removerá o MSET9 para evitar problemas adicionais e restaurar seus dados do usuário (jogos, temas, etc). (Isso não irá remover o custom firmware que você acabou de instalar.)

::: danger

NÃO pule esta seção! Se você pular isso, os aplicativos podem ter um crash inesperado e você encontrará erros na próxima página!

:::

1. Desligue seu console
2. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

1. Type the number corresponding to your console model and version, then tap Return
   - The current state should display [Injected](/images/screenshots/mset9/mset9-ish-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ish-ready.png), skip to Step 6
2. Type `4`, then tap Return to remove the trigger file
   - Você deve ver "Removed trigger file."
3. Type `5`, then tap Return to remove MSET9
   - Você deve ver "Successfully removed MSET9!"
4. Tap Return to close the MSET9 script

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Você seguiu a Seção IV (Removendo o MSET9)? Essa seção é MANDATÓRIA!

:::

::: tip

Continue para [Finalizando a Instalação](finalizing-setup)

:::
