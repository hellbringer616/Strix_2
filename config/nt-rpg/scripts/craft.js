import org.spongepowered.api.Sponge;
import org.spongepowered.api.text.Text;
import org.spongepowered.api.entity.living.player.Player;
import org.spongepowered.api.command.CommandException;
import org.spongepowered.api.command.CommandResult;
import org.spongepowered.api.command.CommandSource;
import org.spongepowered.api.command.args.CommandContext;
import org.spongepowered.api.command.args.GenericArguments;
import org.spongepowered.api.command.spec.CommandExecutor;
import org.spongepowered.api.command.spec.CommandSpec;

public class TwoItemCraft implements CommandExecutor {

    @override
    public CommandResult execute(CommandSource src, CommandContext args) throws CommandException {

      Player player = args.<player>getOne(Text.of("player")).get();

      return CommandResult.sucess();
    }

    public static CommandSpec () {
        return CommandSpec.builder()
                .permission(ntcraft.command.base)
                .arguments(GenericArguments.string(Text.of("<ItemizerID0> <quantity0> <ItemizerID1> <quantity1> <ItemizerID2>< quantity1> <Player>")))
                .arguments(GenericArguments.seq(GenericArguments.onlyOne.(GenericArguments.player(Placeholder_API.Here(%player_name%))),
                                          GenericArguments.ItemizerAPIFetch(Itemizeritem.ref(<ItemizerID0>)),
                                          GenericArguments.string(Text.of(<quantity1>)),
                                          GenericArguments.ItemizerAPIFetch(Itemizeritem.ref(<ItemizerID1>)),
                                          GenericArguments.string(Text.of(<quantity1>)),
                                          GenericArguments.ItemizerAPIFetch(Itemizeritem.ref(<ItemizerID2>)),
                                          GenericArguments.string(Text.of(<quantity2>))
                                        ))
                .child(TwoItemCraft.build(), "TwoItemCraft")
                .executer(new Base())
                .build();
    }
}
